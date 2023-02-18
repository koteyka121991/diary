import { forwardRef } from '@nestjs/common/utils';
import { AuthModule } from './../auth/auth.module';
import { RolesModule } from './../roles/roles.module';
import { UserRoles } from './../roles/user-roles.model';
import { Role } from './../roles/roles.model';
import { User } from './users.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import {  UsersService } from './users.service';
import {  UsersController } from './users.controller';


@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    SequelizeModule.forFeature([User, Role, UserRoles]),
    RolesModule,
    forwardRef(()=> AuthModule) 
  ],
  exports: [UsersService, 
    ]
})
export class UsersModule {}
