import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { BoostmodeConfig } from './models/boostmode-config.model';
import { SocialLoginConfig } from './models/social-login-config.model';
import { UserConfig } from './models/user-config.model';
import { User } from './models/user.model';
import { UsersController } from './users.controller';

@Module({
  imports: [SequelizeModule.forFeature([User, UserConfig, BoostmodeConfig, SocialLoginConfig])],
  exports: [SequelizeModule],
  controllers: [UsersController]
})
export class UsersModule {}
