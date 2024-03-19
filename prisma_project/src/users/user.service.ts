/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { User,Prisma } from "@prisma/client";

@Injectable()
export class UserService{
    constructor(private prisma: PrismaService) {}


    async user(userWhereUniqueInput: Prisma.UserWhereUniqueInput,): Promise<User | null> {
=======
    async user(
      userWhereUniqueInput: Prisma.UserWhereUniqueInput,
    ): Promise<User | null> {
>>>>>>> 47095ddaa30e00edd6fe75403384d96b88e314c2
      return this.prisma.user.findUnique({where: userWhereUniqueInput});
    }
  
    async users(params: {
      skip?: number;
      take?: number;
      cursor?: Prisma.UserWhereUniqueInput;
      where?: Prisma.UserWhereInput;
      orderBy?: Prisma.UserOrderByWithRelationInput;
    }): Promise<User[]> {
      const { skip, take, cursor, where, orderBy } = params;
      return this.prisma.user.findMany({

        skip,  // skip no. of record before return
        take,  //no. of records return 
        cursor, // pagination

        skip,
        take,
        cursor,
        where,
        orderBy,
      });
    }

    
    async createUser(data: Prisma.UserCreateInput): Promise<User> {
        return this.prisma.user.create({data});
      }

    async getUsers():Promise<User[]>{
      return this.prisma.user.findMany();
     }
    
    async updateUser(params: {where: Prisma.UserWhereUniqueInput;data: Prisma.UserUpdateInput;}): Promise<User> {
        const { where, data } = params;
        return this.prisma.user.update({where,data});
    }

    deleteUser(params:{where:Prisma.UserWhereUniqueInput}){
      this.prisma.user.delete(params)
    }
=======

    async createUser(data: Prisma.UserCreateInput): Promise<User> {
        return this.prisma.user.create({data});
      }
    
      async updateUser(params: {
        where: Prisma.UserWhereUniqueInput;
        data: Prisma.UserUpdateInput;
      }): Promise<User> {
        const { where, data } = params;
        return this.prisma.user.update({
          data,
          where,
        });
      }

  
}