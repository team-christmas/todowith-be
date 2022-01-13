import { Controller } from '@nestjs/common';
import { ApiExtraModels, ApiTags } from '@nestjs/swagger';
import { Inquiry } from './models/inquiry.model';

@Controller('inquiries')
@ApiTags('inquiries')
@ApiExtraModels(Inquiry)
export class InquiriesController {}
