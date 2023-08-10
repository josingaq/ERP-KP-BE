import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  welcome(): { message: string } {
    return {
      message: 'Welcome to my API with NestJS - TypeScript - Prisma - MongoDB',
    };
  }
}
