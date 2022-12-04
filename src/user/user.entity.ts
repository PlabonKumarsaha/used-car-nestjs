import { IsEmail } from 'class-validator';
import {
  AfterInsert,
  AfterUpdate,
  Entity,
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  @IsEmail()
  email: string;
  @Column()
  password: string;

  @AfterInsert()
  logInsert() {
    console.log('Your insert id is ' + this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('Your update id is ' + this.id);
  }
}
