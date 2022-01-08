import {
  AllowNull,
  Column,
  Default,
  ForeignKey,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript';
import { User } from './user.model';

@Table
export class BoostmodeConfig extends Model {
  @PrimaryKey
  @ForeignKey(() => User)
  @Column
  userId: number;

  @AllowNull(false)
  @Default(false)
  @Column
  isActive: boolean;

  @AllowNull(false)
  @Default(true)
  @Column
  is2hBeforeOn: boolean;

  @AllowNull(false)
  @Default(true)
  @Column
  is1hBeforeOn: boolean;

  @AllowNull(false)
  @Default(true)
  @Column
  is30mBeforeOn: boolean;

  @AllowNull(false)
  @Default(true)
  @Column
  is3mBeforeOn: boolean;

  @AllowNull(false)
  @Default(true)
  @Column
  is10mAfterOn: boolean;
}
