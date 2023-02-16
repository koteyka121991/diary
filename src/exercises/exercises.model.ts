
import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';
interface ExerciseCreationAttrs{
  name:string;
  weight:string;
  quantity:string;
 
}

@Table({tableName:'exercises'})
export class Exercise extends Model<Exercise, ExerciseCreationAttrs>{
  @ApiProperty({example:'1',description:'Уникальный идентификатор'})
  @Column({type:DataType.INTEGER, unique:true, autoIncrement:true, primaryKey:true})  
  id:number;
  @ApiProperty({example:'Присядания со штангой',description:'Наименование упражнения'})
  @Column({type:DataType.STRING, unique:true, allowNull:false})  
  name:string;
  @ApiProperty({example:'10',description:'Вес выполняемого упражнения'})
  @Column({type:DataType.STRING })  
  weight:string;
  @ApiProperty({example:'10',description:'Количество повторений'})
  @Column({type:DataType.STRING})  
  quantity:string;

}