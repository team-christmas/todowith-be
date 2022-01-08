import {
  AllowNull,
  BelongsTo,
  Column,
  DataType,
  Default,
  ForeignKey,
  IsEmail,
  Model,
  Table
} from 'sequelize-typescript';
import { ON_DELETE_OPTIONS } from 'src/common/constants';
import { File } from 'src/files/models/file.model';

@Table
export class Inquiry extends Model {
  @AllowNull(false)
  @Column
  title: string;

  @Column({ type: DataType.TEXT })
  content: string;

  @IsEmail
  @Column
  email: string;

  @Column
  phoneNumber: string;

  @AllowNull(false)
  @Default(false)
  @Column
  isAgreedUsePcyAgmtYn: boolean;

  @ForeignKey(() => File)
  @Column
  fileId: number;

  @BelongsTo(() => File, { onDelete: ON_DELETE_OPTIONS.SET_NULL })
  file: File;
}
