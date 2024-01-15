import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Solo mantiene data que se espera en el body
      forbidNonWhitelisted: true, // Mostrar error si se envia propiedad adicional
    }),
  );

  await app.listen(3000);
}
bootstrap();
