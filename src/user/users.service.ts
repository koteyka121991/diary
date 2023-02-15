import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./users.model";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}
  // функция создания пользователя
  async createUser(dto: CreateUserDto) {
    const user = await this.userRepository.create(dto);
    return user;
  }
  // функция получения пользователей
  async getAllUsers() {
    const users = await this.userRepository.findAll();
    return users;
  }
}
