import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('welcome')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  welcome(): { message: string } {
    return this.appService.welcome();
  }
}
