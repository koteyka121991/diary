
import { Role } from './../roles/roles.model';
import { ApiProperty } from '@nestjs/swagger';
import { BelongsToMany, Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { UserRoles } from 'src/roles/user-roles.model';
import { Post } from 'src/posts/posts.model';
interface UserCreationAttrs{
  email:string;
  password:string;
}

@Table({tableName:'users'})
export class User extends Model<User, UserCreationAttrs>{
  @ApiProperty({example:'1',description:'Уникальный идентификатор'})
  @Column({type:DataType.INTEGER, unique:true, autoIncrement:true, primaryKey:true})  
  id:number;

  @ApiProperty({example:'user@mail.ru',description:'Почта пользователя'})
  @Column({type:DataType.STRING, unique:true, allowNull:false})  
  email:string;

  @ApiProperty({example:'123456',description:'Пароль пользователя'})
  @Column({type:DataType.STRING, allowNull:false})  
  password:string;

  @ApiProperty({example:'true',description:'Бан'})
  @Column({type:DataType.BOOLEAN, defaultValue:false})  
  banned: boolean;

  @ApiProperty({example:'Ненормативная лексика',description:'Причина бана'})
  @Column({type:DataType.STRING, allowNull:true}) 
  banReason:string;

  @BelongsToMany(()=>Role, () => UserRoles)
  roles:Role[];

  @HasMany(()=> Post)
  posts: Post[];
}