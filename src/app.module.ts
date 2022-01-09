import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';

import * as dbConfig from './config/db-config.json';
import { BadgesModule } from './badges/badges.module';
import { NotificationsModule } from './notifications/notifications.module';
import { FollowsModule } from './follows/follows.module';
import { GoalsModule } from './goals/goals.module';
import { TodosModule } from './todos/todos.module';
import { NoticesModule } from './notices/notices.module';
import { FilesModule } from './files/files.module';
import { InquiriesModule } from './inquiries/inquiries.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      autoLoadModels: dbConfig.autoLoadModels,
      synchronize: dbConfig.synchronize,
      sync: { force: false },
      define: {
        underscored: true,
        timestamps: false
      }
    }),
    UsersModule,
    BadgesModule,
    NotificationsModule,
    FollowsModule,
    GoalsModule,
    TodosModule,
    NoticesModule,
    FilesModule,
    InquiriesModule
  ],
  controllers: [AppController]
})
export class AppModule {}
