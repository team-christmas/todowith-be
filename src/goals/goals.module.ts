import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Goal, UserToShowGoal } from './models/goal.model';
import { GoalsController } from './goals.controller';
import { GoalsService } from './goals.service';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [SequelizeModule.forFeature([Goal, UserToShowGoal]), UsersModule],
  exports: [SequelizeModule],
  controllers: [GoalsController],
  providers: [GoalsService]
})
export class GoalsModule {}
