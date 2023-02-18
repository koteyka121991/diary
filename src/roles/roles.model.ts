import { User } from "./../user/users.model";

import { ApiProperty } from "@nestjs/swagger";
import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from "sequelize-typescript";
import { UserRoles } from "./user-roles.model";
interface RoleCreationAttrs {
  value: string;
  description: string;
}

@Table({ tableName: "roles" })
export class Role extends Model<Role, RoleCreationAttrs> {
  @ApiProperty({ example: "1", description: "Уникальный идентификатор" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: "ADMIN", description: "Уникальное значение роли" })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  value: string;

  @ApiProperty({ example: "Алминистратор", description: "Описание роли" })
  @Column({ type: DataType.STRING, allowNull: false })
  description: string;

  // Связь с сущностью (много ко многим)
  @BelongsToMany(() => User, () => UserRoles)
  users: User[];
}
