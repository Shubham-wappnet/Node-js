/* eslint-disable prettier/prettier */
import { Photo } from 'src/photos/photo.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';


@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id:number;

  @Column()
  email:string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(()=>Photo, photo=>photo.user)
  photos:Photo[];
}