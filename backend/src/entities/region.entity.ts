import {
  Column,
  Model,
  PrimaryKey,
  Table,
  HasMany,
} from 'sequelize-typescript';
import { Medico } from './medico.entity';

@Table({
  tableName: 'Region',
  timestamps: false,
})
export class Region extends Model {
  @PrimaryKey
  @Column
  declare id: number;

  @Column
  declare nombre: string;

  @HasMany(() => Medico)
  declare medicos: Medico[];
}

export default Region;
