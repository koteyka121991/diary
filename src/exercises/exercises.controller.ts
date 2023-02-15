import { ExercisesService } from './exercises.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateExerciseDto } from './dto/create-exercise.dto';

@Controller('exercises')
export class ExercisesController {
    constructor(private exerciseService: ExercisesService) {}

    @Post()
  create(@Body() exerciseDto: CreateExerciseDto){
    return this.exerciseService.createExercise(exerciseDto)
  }  
  @Get()
  getAll(){
    return this.exerciseService.getAllExercises()
  }
}
