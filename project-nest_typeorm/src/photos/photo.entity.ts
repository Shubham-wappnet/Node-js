/* eslint-disable prettier/prettier */
import { User } from 'src/users/user.entity';
import { Entity, Column, PrimaryGeneratedColumn,ManyToOne } from 'typeorm';


@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  photoId:number;

  @Column()
  photo_type:string;
  
  @ManyToOne(() => User, user => user.photos)
  user: User

  @Column()
  userId: number;
}