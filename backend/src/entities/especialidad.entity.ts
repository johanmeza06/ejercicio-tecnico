import {
  Column,
  Model,
  PrimaryKey,
  Table,
  HasMany,
  DataType,
} from 'sequelize-typescript';
import { Medico } from './medico.entity';

@Table({
  tableName: 'Especialidad',
  timestamps: false,
})
export class Especialidad extends Model<Especialidad> {
  @PrimaryKey
  @Column({
    type: DataType.STRING,
  })
  declare id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare nombre: string;

  @HasMany(() => Medico)
  declare medicos: Medico[];
}

export default Especialidad;
