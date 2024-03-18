/* eslint-disable prettier/prettier */
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./user.entity";
// import { JwtService } from "@nestjs/jwt";
// import * as bcrypt from 'bcryptjs'


export class UserService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>) { }

    async addAll(user: User): Promise<User> {
        const { email,firstName,lastName,isActive } = user;
    
        const newUser =  this.userRepository.create({
          email,firstName,lastName,isActive 
        });
    
        return await this.userRepository.save(newUser);
    }
    // async signup(user: User): Promise<User> {
    //     const { email, firstName, lastName, isActive, password } = user;
    //     const existingUser = await this.userRepository.findOneBy({ email })
    //     if (!existingUser) {
    //         console.log("User is already exist")
    //     }
    //     const hashPassword = await bcrypt.hash(password, 10)

    //     const newUser = this.userRepository.create({
    //         email, firstName, lastName, isActive, password: hashPassword
    //     });
    //     return await this.userRepository.save(newUser);

    // }

    // async login(user: User): Promise<{ accessToken: string }> {
    //     const { email, password } = user;
    //     const validUser = await this.userRepository.findOneBy({ email });
    //     if (!validUser) {
    //         console.log("user not found")
    //     }
    //     const isPasswordValid=await bcrypt.compare(password,user.password)
    //     if(!isPasswordValid){
    //         console.log("password not match")
    //     }
    //     const payload={email:user.email}
    //     const accessToken=this.jwtService.sign(payload)
    //     return {accessToken}
    // }



    findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    findOne(id: number): Promise<User> {
        return this.userRepository.findOneBy({ id })
    }

    async findPhotosByUserId(id: number): Promise<User> {
        const photo = await this.userRepository.findOne({ where: { id }, relations: ["photos"] });
        if (!photo) {
            throw new Error('photo not found');
        }
        return photo;
    }

    async remove(id: number): Promise<any> {
        await this.userRepository.delete({ id })
    }
}

