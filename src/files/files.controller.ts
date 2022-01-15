import { Controller } from '@nestjs/common';
import { ApiExtraModels, ApiTags } from '@nestjs/swagger';
import { File } from './models/file.model';

@Controller('files')
@ApiTags('files')
@ApiExtraModels(File)
export class FilesController {}
