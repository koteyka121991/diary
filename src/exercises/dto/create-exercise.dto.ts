import { ApiProperty } from "@nestjs/swagger";

export class CreateExerciseDto{
    @ApiProperty({example:'Присядания со штангой',description:'Наименование упражнения'})
    readonly name:string;
    @ApiProperty({example:'10',description:'Вес выполняемого упражнения'})
    readonly weight:string;
    @ApiProperty({example:'10',description:'Количество повторений'})
    readonly quantity:string;

}