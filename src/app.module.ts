import { User } from './user/user.model';
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { Exercise } from './exercises/exercises.model';

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
      models: [User, Exercise],
      autoLoadModels: true,
    }),
  ],

  //   imports: [UserModule, ExercisesModule]
})
export class AppModule {}
