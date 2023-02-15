
import { Column, DataType, Model, Table } from 'sequelize-typescript';
interface ExerciseCreationAttrs{
  name:string;
  weight:string;
  quantity:string;
 
}

@Table({tableName:'exercises'})
export class Exercise extends Model<Exercise, ExerciseCreationAttrs>{
  @Column({type:DataType.INTEGER, unique:true, autoIncrement:true, primaryKey:true})  
  id:number;
  @Column({type:DataType.STRING, unique:true, allowNull:false})  
  name:string;
  @Column({type:DataType.STRING, allowNull:false})  
  weight:string;
  @Column({type:DataType.STRING, allowNull:false})  
  quantity:string;

 
  // @Column({type:DataType.STRING,  allowNull:false})  
  // name:string;
  // // allowNull:true путое значение
  // @Column({type:DataType.STRING, allowNull:false})  
  // quantity:string;
  // @Column({type:DataType.STRING, allowNull:false})  
  // weight:string;



}