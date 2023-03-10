import { Role } from './roles.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateRoleDto } from './dto/create-role.dto';

@Injectable()
export class RolesService {
    constructor(@InjectModel(Role) private roleRepository: typeof Role) {}
    // функция создания пользователя
    async createRole(dto: CreateRoleDto) {
      const role = await this.roleRepository.create(dto);
      return role;
    }
    // функция получения пользователей
    async getRoleByValue(value:string) {
      const role = await this.roleRepository.findOne({where:{value}});
      return role;
    }
}
