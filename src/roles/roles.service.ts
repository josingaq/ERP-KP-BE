import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class RolesService {
  constructor(
    private configService: ConfigService,
    private prisma: PrismaService,
  ) {}

  async create(createRoleDto: CreateRoleDto) {
    return await this.prisma.role.create({
      data: createRoleDto,
      include: {
        users: true,
      },
    });
  }

  async findAll() {
    // const TEST = this.configService.get<string>('TEST');
    return await this.prisma.role.findMany({
      include: {
        users: true,
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} role`;
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return `This action updates a #${id} role`;
  }

  remove(id: number) {
    return `This action removes a #${id} role`;
  }
}
