import { ApiProperty } from '@nestjs/swagger';
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
import { OnDeleteOptions } from 'src/common/constants';
import { File } from 'src/files/models/file.model';

@Table
export class Inquiry extends Model {
  @AllowNull(false)
  @Column
  @ApiProperty({ description: '문의 제목' })
  title: string;

  @Column({ type: DataType.TEXT })
  @ApiProperty({ description: '문의 내용', required: false })
  content: string;

  @IsEmail
  @Column
  @ApiProperty({ description: '작성자 이메일', required: false })
  email: string;

  @Column
  @ApiProperty({ description: '작성자 휴대폰 번호', required: false })
  phoneNumber: string;

  @AllowNull(false)
  @Default(false)
  @Column
  @ApiProperty({ description: '정보수집동의 여부', default: false })
  isAgreedUsePcyAgmtYn: boolean;

  @ForeignKey(() => File)
  @Column
  @ApiProperty({ description: '첨부파일 ID', required: false })
  fileId: number;

  @BelongsTo(() => File, { onDelete: OnDeleteOptions.SET_NULL })
  file: File;
}
