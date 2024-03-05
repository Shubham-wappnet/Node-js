/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./create-user-Dto";



@Injectable()
export class UserService{
    private store=new Map<number,CreateUserDto>();

    addUser(user:CreateUserDto){
        this.store.set(user.id,user)
    }
    getUsers(): CreateUserDto[]{
        return Array. from(this.store.values()).map((user)=>user)
    }
    getUser(id:number){
        return this.store.get(id)
    }
    
    updateUser(id:number,user:CreateUserDto){
        this.store.set(id,user)
    }
    deleteUser(id:number){
        this.store.delete(id)
    }
}