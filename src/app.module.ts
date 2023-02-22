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
import { PostsModule } from './posts/posts.module';
import { Post } from 'src/posts/posts.model';
import { FilesModule } from './files/files.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath:`.${process.env.NODE_ENV}.env`,
    }),
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    SequelizeModule.forRoot({
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRESS_PORT),
      dialect: "postgres",
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRESS_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User, Exercise, Role,  UserRoles, Post],
      autoLoadModels: true,
    }),
    UsersModule, ExercisesModule, RolesModule, AuthModule, PostsModule, FilesModule
  ],

 
})
export class AppModule {}
