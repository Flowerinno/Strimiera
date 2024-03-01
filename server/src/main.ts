import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { EnvService } from './modules/env/env.service';
import { json } from 'express';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: { origin: true },
  });

  app.use(cookieParser(app.get(EnvService).get('COOKIE_SECRET')));
  app.use(
    json({
      limit: '1mb',
    }),
  );
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  app.setGlobalPrefix('api');

  await app.listen(app.get(EnvService).get('PORT'), () => {
    console.log(
      `Server is running on http://localhost:${app.get(EnvService).get('PORT')}`,
    );
  });
}

bootstrap();
