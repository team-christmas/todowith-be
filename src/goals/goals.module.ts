import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Goal, UserToShowGoal } from './models/goal.model';
import { GoalsController } from './goals.controller';

@Module({
  imports: [SequelizeModule.forFeature([Goal, UserToShowGoal])],
  exports: [SequelizeModule],
  controllers: [GoalsController]
})
export class GoalsModule {}
