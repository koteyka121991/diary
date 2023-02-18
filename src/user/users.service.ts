import { RolesService } from './../roles/roles.service';
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./users.model";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User,
  private roleService:RolesService) {}
 
  // функция создания пользователя
  async createUser(dto: CreateUserDto) {
    const user = await this.userRepository.create(dto);
    const role=await this.roleService.getRoleByValue("ADMIN");
    await user.$set('roles', [role.id])
    user.roles=[role]
    return user;
  }
  // функция получения пользователей
  async getAllUsers() {
    const users = await this.userRepository.findAll({include:{all:true}});
    return users;
  }
  async getUserByEmail(email:string) {
const user=await this.userRepository.findOne({where:{email}, include:{all:true}})
return user; 
}
}
