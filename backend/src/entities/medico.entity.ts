import {
  Column,
  Model,
  PrimaryKey,
  Table,
  ForeignKey,
  BelongsTo,
  DataType,
} from 'sequelize-typescript';
import { Region } from './region.entity';
import { Especialidad } from './especialidad.entity';

@Table({
  tableName: 'Medico',
  timestamps: false,
})
export class Medico extends Model {
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
  })
  declare id: number;

  @Column({
    type: DataType.INTEGER,
    field: 'codigo_medico',
  })
  declare cdgMed: number;

  @Column
  declare nombre: string;

  @Column
  declare calle: string;

  @Column
  declare barrio: string;

  @Column
  declare zona: string;

  @ForeignKey(() => Region)
  @Column
  declare regionId: number;

  @BelongsTo(() => Region)
  declare region: Region;

  @ForeignKey(() => Especialidad)
  @Column
  declare especialidadId: string;

  @BelongsTo(() => Especialidad)
  declare especialidad: Especialidad;
}

export default Medico;
