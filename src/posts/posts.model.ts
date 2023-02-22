import { User } from './../user/users.model';
import { ApiProperty } from '@nestjs/swagger';
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
interface PostCreationAttrs{
    title:string;
    content:string;
    image:string;
    userId: number;
 
}

@Table({tableName:'posts'})
export class Post extends Model<Post, PostCreationAttrs>{
  @ApiProperty({example:'1',description:'Уникальный идентификатор'})
  @Column({type:DataType.INTEGER, unique:true, autoIncrement:true, primaryKey:true})  
  id:number;  

  @Column({type:DataType.STRING,  allowNull:false})  
  title:string;

  @Column({type:DataType.STRING })  
  content:string;

  @Column({type:DataType.STRING})  
  image:string;

  @ForeignKey(()=>User)
  @Column({type:DataType.INTEGER })  
  userId: number;

  @BelongsTo(()=> User)
  author: User

}