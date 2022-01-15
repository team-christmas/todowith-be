import { Controller } from '@nestjs/common';
import { ApiExtraModels, ApiTags } from '@nestjs/swagger';
import { BoostmodeConfig } from './models/boostmode-config.model';
import { SocialLoginConfig } from './models/social-login-config.model';
import { UserConfig } from './models/user-config.model';
import { User } from './models/user.model';

@Controller('users')
@ApiTags('users')
@ApiExtraModels(User, UserConfig, BoostmodeConfig, SocialLoginConfig)
export class UsersController {}
