import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ExercisesController } from './exercises.controller';
import { Exercise } from './exercises.model';
import { ExercisesService } from './exercises.service';

@Module({
  controllers: [ExercisesController],
  providers: [ExercisesService],
  imports: [
    SequelizeModule.forFeature([Exercise])
  ]
})
export class ExercisesModule {}
