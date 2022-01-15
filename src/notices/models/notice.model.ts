import { ApiProperty } from '@nestjs/swagger';
import {
  AllowNull,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table
} from 'sequelize-typescript';
import { OnDeleteOptions } from 'src/common/constants';
import { File } from 'src/files/models/file.model';

@Table
export class Notice extends Model {
  @AllowNull(false)
  @Column
  @ApiProperty({ description: '공지사항 제목' })
  title: string;

  @Column({ type: DataType.TEXT })
  @ApiProperty({ description: '공지사항 내용', required: false })
  content: string;

  @ForeignKey(() => File)
  @Column
  @ApiProperty({ description: '첨부파일 ID', required: false })
  fileId: number;

  @BelongsTo(() => File, { onDelete: OnDeleteOptions.SET_NULL })
  file: File;
}
