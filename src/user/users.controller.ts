import { ValidationPipe } from './../pipes/validation.pipe';
import { AddRoleDto } from './dto/add-role.dto';
import { RolesGuard } from './../auth/roles.guard';
import { JwtAuthGuard } from './../auth/jwt-auth.guard';
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { User } from "./users.model";
import { Roles } from 'src/auth/roles-auth.deorator';
import { BanUserDto } from './dto/ban-user.dto';
import { UsePipes } from '@nestjs/common/decorators/core/use-pipes.decorator';
@ApiTags('Пользователи')
@Controller("users")
export class UsersController {
  constructor(private userService: UsersService) {}
  @ApiOperation({ summary: "создание пользователя" })
  @ApiResponse({ status: 200, type: User })
 
  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.userService.createUser(userDto);
  }
  @ApiOperation({ summary: "Получение пользователей" })
  @ApiResponse({ status: 200, type: [User] })
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Get()
  getAll() {
    return this.userService.getAllUsers();
  }
  @ApiOperation({ summary: "Выдать роль" })
  @ApiResponse({ status: 200})
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Post('/role')
  addRole(@Body() dto:AddRoleDto) {
    return this.userService.addRole(dto);
  }
  @ApiOperation({ summary: "Забанить пользователя" })
  @ApiResponse({ status: 200})
  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Post('/ban')
  ban(@Body() dto:BanUserDto) {
    return this.userService.ban(dto);
  }
  
}
