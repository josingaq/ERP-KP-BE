import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return this.prisma.user.findMany({
      include: {
        Role: true,
        permissions: true,
      },
      // select: {
      //   id: true,
      //   email: true,
      //   name: true,
      //   Role: {
      //     select: {
      //       id: true,
      //       name: true,
      //     },
      //   },
      //   roleId: true,
      //   permissions: {
      //     select: {
      //       id: true,
      //       module: true,
      //     },
      //   },
      // },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
