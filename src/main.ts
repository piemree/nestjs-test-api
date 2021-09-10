import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const port = process.env.PORT || 3000;
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  if (process.env.NODE_ENV === 'production') {
    app.useStaticAssets(join(__dirname, '../../static'));
  } else {
    app.useStaticAssets(join(__dirname, '../../staticLocal'));
  }
  //app.enableCors();
  //app.useGlobalPipes(new ValidationPipe());
  await app.listen(port);
}
bootstrap();
