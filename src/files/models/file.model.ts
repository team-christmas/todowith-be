import { AllowNull, Column, CreatedAt, DataType, Model, Table } from 'sequelize-typescript';

@Table({ updatedAt: false })
export class File extends Model {
  @AllowNull(false)
  @Column
  name: string;

  @AllowNull(false)
  @Column
  type: string;

  @AllowNull(false)
  @Column({ type: DataType.FLOAT })
  size: number;

  @AllowNull(false)
  @Column
  location: string;

  @CreatedAt
  uploadedDate: Date;
}
