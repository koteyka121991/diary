import { UserRoles } from './roles/user-roles.model';
import { Role } from './roles/roles.model';
import {  UsersModule } from './user/users.module';
import { User } from './user/users.model';
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { Exercise } from './exercises/exercises.model';
import { ExercisesModule } from './exercises/exercises.module';
import { RolesModule } from './roles/roles.module';
import { AuthModule } from './auth/auth.module';

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath:`.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRESS_PORT),
      dialect: "postgres",
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRESS_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User, Exercise, Role,  UserRoles],
      autoLoadModels: true,
    }),
    UsersModule, ExercisesModule, RolesModule, AuthModule
  ],

 
})
export class AppModule {}
