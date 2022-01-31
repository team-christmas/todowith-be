import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiExtraModels,
  ApiNotFoundResponse,
  ApiOperation,
  ApiTags
} from '@nestjs/swagger';
import { MSG_NOT_EXISTING_GOAL_ID, MSG_NOT_EXISTING_USER_ID } from 'src/common/messages';
import { CreateGoalDTO } from './dto/create-goal.dto';
import { UpdateGoalDTO } from './dto/update-goal.dto';
import { GoalsService } from './goals.service';
import { Goal, UserToShowGoal } from './models/goal.model';

@Controller('goals')
@ApiTags('goals')
@ApiExtraModels(Goal, UserToShowGoal)
export class GoalsController {
  constructor(private goalsService: GoalsService) {}

  @Post()
  @ApiOperation({ summary: '목표 등록' })
  @ApiBadRequestResponse({ description: MSG_NOT_EXISTING_USER_ID })
  async create(@Body() goalData: CreateGoalDTO): Promise<Goal> {
    try {
      const createdGoal: Goal = await this.goalsService.create(goalData);
      return createdGoal;
    } catch (err) {
      console.log(err.message);
      if (err.message === MSG_NOT_EXISTING_USER_ID) {
        // 존재하지 않는 userId
        throw new HttpException(MSG_NOT_EXISTING_USER_ID, HttpStatus.BAD_REQUEST);
      }
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get()
  @ApiOperation({ summary: '특정 사용자의 목표 목록 조회' })
  @ApiBadRequestResponse({ description: MSG_NOT_EXISTING_USER_ID })
  async findAllByUserId(@Query('userId', ParseIntPipe) userId: number): Promise<Goal[]> {
    try {
      const goals: Goal[] = await this.goalsService.findAllByUserId(userId);
      return goals;
    } catch (err) {
      console.log(err.message);
      if (err.message === MSG_NOT_EXISTING_USER_ID) {
        // 존재하지 않는 userId
        throw new HttpException(MSG_NOT_EXISTING_USER_ID, HttpStatus.BAD_REQUEST);
      }
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get(':id')
  @ApiOperation({ summary: '목표 조회', description: 'ID로 목표를 조회합니다.' })
  @ApiNotFoundResponse({ description: MSG_NOT_EXISTING_GOAL_ID })
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Goal> {
    const goal: Goal = await this.goalsService.findOne(id);
    if (!goal) {
      // 존재하지 않는 goalId
      throw new HttpException(MSG_NOT_EXISTING_GOAL_ID, HttpStatus.NOT_FOUND);
    }
    return goal;
  }

  @Patch(':id')
  @ApiOperation({ summary: '목표 수정', description: '특정 ID의 목표를 수정합니다.' })
  @ApiNotFoundResponse({ description: MSG_NOT_EXISTING_GOAL_ID })
  @ApiBadRequestResponse({ description: MSG_NOT_EXISTING_USER_ID })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() goalData: UpdateGoalDTO
  ): Promise<void> {
    try {
      await this.goalsService.update(id, goalData);
    } catch (err) {
      if (err.message === MSG_NOT_EXISTING_GOAL_ID) {
        // 존재하지 않는 goalId
        throw new HttpException(MSG_NOT_EXISTING_GOAL_ID, HttpStatus.NOT_FOUND);
      }
      if (err.message === MSG_NOT_EXISTING_USER_ID) {
        // 존재하지 않는 userId
        throw new HttpException(MSG_NOT_EXISTING_USER_ID, HttpStatus.BAD_REQUEST);
      }
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete(':id')
  @ApiOperation({ summary: '목표 삭제', description: '특정 ID의 목표를 삭제합니다.' })
  @ApiNotFoundResponse({ description: MSG_NOT_EXISTING_GOAL_ID })
  async delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
    try {
      await this.goalsService.delete(id);
    } catch (err) {
      if (err.message === MSG_NOT_EXISTING_GOAL_ID) {
        throw new HttpException(MSG_NOT_EXISTING_GOAL_ID, HttpStatus.NOT_FOUND);
      }
    }
  }
}
