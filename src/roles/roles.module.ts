import { UserRoles } from './user-roles.model';
import { User } from './../user/users.model';
import { Role } from './roles.model';
import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  providers: [RolesService],
  controllers: [RolesController],
  imports: [
    SequelizeModule.forFeature([Role, User, UserRoles])
  ],
  exports:[
    RolesService
  ]
})

export class RolesModule {}
