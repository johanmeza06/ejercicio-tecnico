import * as xlsx from 'xlsx';
import { Sequelize } from 'sequelize-typescript';
import { Region } from '../entities/region.entity';
import { Especialidad } from '../entities/especialidad.entity';
import { Medico } from '../entities/medico.entity';
import * as dotenv from 'dotenv';

dotenv.config();

const isProduction = process.env.NODE_ENV === 'production';

// Configuración de la bd
const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_HOST,
  port: +(process.env.DB_PORT ?? 5432),
  username: process.env.DB_USERNAME || '',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME,
  models: [Region, Especialidad, Medico],
  logging: false,
  ...(isProduction && {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }),
});

async function seed() {
  await sequelize.sync({ force: true });

  const workbook = xlsx.readFile('./src/seed/DBMEDICOS.xlsx');
  const medicoSheet = xlsx.utils.sheet_to_json(workbook.Sheets['MEDICO']);
  const regionSheet = xlsx.utils.sheet_to_json(workbook.Sheets['REGION']);
  const especialidadSheet = xlsx.utils.sheet_to_json(
    workbook.Sheets['ESPECIALIDAD'],
  );

  for (const region of regionSheet as Array<{
    CDGREG: number;
    NOMBRE: string;
  }>) {
    await Region.create({ id: region.CDGREG, nombre: region.NOMBRE });
  }

  for (const esp of especialidadSheet as Array<{
    CDGESP: string;
    NOMBRE: string;
  }>) {
    await Especialidad.create({ id: esp.CDGESP, nombre: esp.NOMBRE } as any);
  }

  for (const med of medicoSheet as Array<{
    CDGMED: number;
    NOMBRE: string;
    CALLE: string;
    BARRIO: string;
    ZONA: string;
    CDGREG: number;
    CDGESP: string;
  }>) {
    const limpiarNombre = (nombre: string) =>
      nombre.replace(/#/g, 'Ñ').trim().toUpperCase();
    await Medico.create({
      cdgMed: +med.CDGMED,
      nombre: limpiarNombre(med.NOMBRE),
      calle: med.CALLE,
      barrio: med.BARRIO,
      zona: med.ZONA,
      regionId: +med.CDGREG,
      especialidadId: med.CDGESP,
    });
  }

  console.log('Base de datos cargada exitosamente');
  await sequelize.close();
}

seed().catch(console.error);
