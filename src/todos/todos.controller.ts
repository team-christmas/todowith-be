import { Controller } from '@nestjs/common';
import { ApiExtraModels, ApiTags } from '@nestjs/swagger';
import { Hashtag } from './models/hashtag.model';
import { Sticker } from './models/sticker.model';
import { Todo } from './models/todo.model';

@Controller('todos')
@ApiTags('todos')
@ApiExtraModels(Todo, Sticker, Hashtag)
export class TodosController {}
