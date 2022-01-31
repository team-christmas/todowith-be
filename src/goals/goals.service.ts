import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { MSG_NOT_EXISTING_GOAL_ID, MSG_NOT_EXISTING_USER_ID } from 'src/common/messages';
import { User } from 'src/users/models/user.model';
import { CreateGoalDTO } from './dto/create-goal.dto';
import { UpdateGoalDTO } from './dto/update-goal.dto';
import { Goal } from './models/goal.model';

@Injectable()
export class GoalsService {
  constructor(
    @InjectModel(Goal)
    private goalModel: typeof Goal,
    @InjectModel(User)
    private userModel: typeof User
  ) {}

  // 해당 id의 goal이 존재하는지 검사
  async doesExist(id: number): Promise<boolean> {
    return (await this.goalModel.count({ where: { id } })) > 0 ? true : false;
  }

  // TODO validateUserID 메소드를 usersService로 옮기고 @InjectModel 삭제
  async validateUserId(userId: number): Promise<boolean> {
    return (await this.userModel.count({ where: { id: userId } })) > 0 ? true : false;
  }

  // goal 생성
  async create(goalData: CreateGoalDTO): Promise<Goal> {
    // user가 존재하는지 검사
    if ((await this.validateUserId(goalData.userId)) === false) {
      // 존재하지 않는 user
      throw new Error(MSG_NOT_EXISTING_USER_ID);
    }

    return this.goalModel.create(goalData);
  }

  // goal 조회
  async findOne(id: number): Promise<Goal> {
    return this.goalModel.findOne({ where: { id } });
  }

  // userId로 goal 목록 조회
  async findAllByUserId(userId: number): Promise<Goal[]> {
    // user가 존재하는지 검사
    if ((await this.validateUserId(userId)) === false) {
      // 존재하지 않는 user
      throw new Error(MSG_NOT_EXISTING_USER_ID);
    }

    return this.goalModel.findAll({ where: { userId: userId } });
  }

  // goal 수정
  async update(id: number, goalData: UpdateGoalDTO): Promise<void> {
    // goal이 존재하는지 검사
    if ((await this.doesExist(id)) === false) {
      // 존재하지 않는 goal
      throw new Error(MSG_NOT_EXISTING_GOAL_ID);
    }

    // goalData가 userId를 포함하는 경우, user가 존재하는지 검사
    if (goalData.userId != null && (await this.validateUserId(goalData.userId)) === false) {
      // 존재하지 않는 user
      throw new Error(MSG_NOT_EXISTING_USER_ID);
    }

    await this.goalModel.update({ ...goalData }, { where: { id } });
  }

  // goal 삭제
  async delete(id: number): Promise<void> {
    // goal이 존재하는지 검사
    if ((await this.doesExist(id)) === false) {
      // 존재하지 않는 goal
      throw new Error(MSG_NOT_EXISTING_GOAL_ID);
    }

    await this.goalModel.destroy({ where: { id } });
  }
}
