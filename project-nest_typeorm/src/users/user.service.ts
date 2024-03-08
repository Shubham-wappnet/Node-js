/* eslint-disable prettier/prettier */
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./user.entity";
import { Photo } from "src/photos/photo.entity";


export class UserService{
    constructor(@InjectRepository(User) private userRepository:Repository<User>,
                @InjectRepository(Photo) private photoRepository:Repository<Photo>
                ){}

    
    async addAll(user: User): Promise<User> {
        const { email,firstName,lastName,isActive } = user;
    
        const newUser =  this.userRepository.create({
          email,firstName,lastName,isActive 
        });
    
        return await this.userRepository.save(newUser);
    }

    findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    findOne(id:number):Promise<User>{
        return this.userRepository.findOneBy({id})
    }

    async findPhotosByUserId(id: number): Promise<User> {
        const photo = await this.userRepository.findOne({where:{id},relations:["photos"]});
        if (!photo) {
          throw new Error('photo not found');
        }
        return photo;
    }    

    async remove(id:number):Promise<any>{
        await this.userRepository.delete({id})
    }
}

