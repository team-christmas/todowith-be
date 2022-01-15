import { ApiProperty } from '@nestjs/swagger';
import { AllowNull, Column, Model, Table } from 'sequelize-typescript';

@Table
export class Badge extends Model {
  @AllowNull(false)
  @Column
  @ApiProperty({ description: '배지 이름' })
  name: string;

  @Column
  @ApiProperty({ description: '배지 설명', required: false })
  description: string;

  @Column
  @ApiProperty({ description: '배지 획득 방법', required: false })
  acquireMethod: string;
}
