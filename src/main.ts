import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  const FE_URL_LOCAL = configService.get<string>('FE_URL_LOCAL');
  const FE_URL_DEV = configService.get<string>('FE_URL_DEV');
  const FE_URL_PROD = configService.get<string>('FE_URL_PROD');

  app.enableCors({
    origin: [FE_URL_LOCAL, FE_URL_DEV, FE_URL_PROD],
    credentials: true,
  });

  app.setGlobalPrefix('/api/v1');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // https://docs.nestjs.com/openapi/operations
  const config = new DocumentBuilder()
    .setTitle('ERP ASSOCIATION KP API')
    // .setDescription('API for the ERP of the KP Association')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('/docs', app, document);

  const PORT = configService.get<number>('PORT');

  await app.listen(PORT, '0.0.0.0');
}

bootstrap();
