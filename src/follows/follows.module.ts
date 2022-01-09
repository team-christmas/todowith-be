import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Follow } from './models/follow.model';

@Module({
  imports: [SequelizeModule.forFeature([Follow])],
  exports: [SequelizeModule]
})
export class FollowsModule {}
