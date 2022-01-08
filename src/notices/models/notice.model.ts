import {
  AllowNull,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table
} from 'sequelize-typescript';
import { ON_DELETE_OPTIONS } from 'src/common/constants';
import { File } from 'src/files/models/file.model';

@Table
export class Notice extends Model {
  @AllowNull(false)
  @Column
  title: string;

  @Column({ type: DataType.TEXT })
  content: string;

  @ForeignKey(() => File)
  @Column
  fileId: number;

  @BelongsTo(() => File, { onDelete: ON_DELETE_OPTIONS.SET_NULL })
  file: File;
}
