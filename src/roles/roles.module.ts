import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  imports: [],
  controllers: [RolesController],
  providers: [RolesService, PrismaService],
  exports: [],
})
export class RolesModule {}
