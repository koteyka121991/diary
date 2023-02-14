
import { Column, DataType, Model, Table } from 'sequelize-typescript';
interface ExerciseCreationAttrs{
  name:string;
  weight:number;
  numberTimes:number;
}

@Table({tableName:'exercise'})
export class Exercise extends Model<Exercise, ExerciseCreationAttrs>{
  @Column({type:DataType.INTEGER, unique:true, autoIncrement:true, primaryKey:true})  
  id:number;
  @Column({type:DataType.STRING, unique:true, allowNull:false})  
  name:string;
  // allowNull:true путое значение
  @Column({type:DataType.INTEGER, unique:true, allowNull:true})  
  weight:number;

  @Column({type:DataType.INTEGER, unique:true, allowNull:true})  
  numberTimes:number;
  

}