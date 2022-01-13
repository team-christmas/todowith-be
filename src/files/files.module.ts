import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { File } from './models/file.model';
import { FilesController } from './files.controller';

@Module({
  imports: [SequelizeModule.forFeature([File])],
  exports: [SequelizeModule],
  controllers: [FilesController]
})
export class FilesModule {}
