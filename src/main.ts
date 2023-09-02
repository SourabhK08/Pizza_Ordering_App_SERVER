import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(
  new ValidationPipe({
    whitelist: true,  // no any extra field enter only required fields will come
  }),
);

  await app.listen(8000);
}
bootstrap();
