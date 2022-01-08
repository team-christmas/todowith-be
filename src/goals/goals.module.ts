import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Goal, UserToShowGoal } from './models/goal.model';

@Module({
  imports: [SequelizeModule.forFeature([Goal, UserToShowGoal])],
  exports: [SequelizeModule]
})
export class GoalsModule {}
