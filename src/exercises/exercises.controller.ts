import { Exercise } from './exercises.model';
import { ExercisesService } from './exercises.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
@ApiTags('Упражнения')
@Controller('exercises')
export class ExercisesController {
    constructor(private exerciseService: ExercisesService) {}
    @ApiOperation({ summary: "создание упражнения" })
    @ApiResponse({ status: 200, type: Exercise })
    @Post()
  create(@Body() exerciseDto: CreateExerciseDto){
    return this.exerciseService.createExercise(exerciseDto)
  }  
  @ApiOperation({ summary: "Получение упражнения" })
  @ApiResponse({ status: 200, type: [Exercise] })
  @Get()
  getAll(){
    return this.exerciseService.getAllExercises()
  }
}
