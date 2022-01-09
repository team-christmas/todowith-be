import { AllowNull, Column, Model, Table } from 'sequelize-typescript';

@Table
export class Badge extends Model {
  @AllowNull(false)
  @Column
  name: string;

  @Column
  description: string;

  @Column
  acquireMethod: string;
}
