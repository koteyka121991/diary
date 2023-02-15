import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { Exercise } from './exercises.model';

@Injectable()
export class ExercisesService {
    constructor(@InjectModel(Exercise) private exerciseRepository: typeof Exercise) {}
    // функция создания пользователя
    async createExercise(dto: CreateExerciseDto) {
      const exercise = await this.exerciseRepository.create(dto);
      return exercise;
    }
    // функция получения пользователей
    async getAllExercises() {
      const exercises = await this.exerciseRepository.findAll();
      return exercises;
    }
}
