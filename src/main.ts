import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Todas as requisições que passam pelos controladores da sua aplicação serão automaticamente validadas de acordo com as regras definidas pelo ValidationPipe.
  app.useGlobalPipes(new ValidationPipe())
  
  await app.listen(3000);
}
bootstrap();
