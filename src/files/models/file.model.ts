import { ApiProperty } from '@nestjs/swagger';
import { AllowNull, Column, CreatedAt, DataType, Model, Table } from 'sequelize-typescript';

@Table({ updatedAt: false })
export class File extends Model {
  @AllowNull(false)
  @Column
  @ApiProperty({ description: '파일 이름' })
  name: string;

  @AllowNull(false)
  @Column
  @ApiProperty({ description: '파일 타입' })
  type: string;

  @AllowNull(false)
  @Column({ type: DataType.FLOAT })
  @ApiProperty({ description: '파일 사이즈' })
  size: number;

  @AllowNull(false)
  @Column
  @ApiProperty({ description: '파일 경로' })
  location: string;

  @CreatedAt
  @ApiProperty({ description: '파일 업로드 날짜' })
  uploadedDate: Date;
}
