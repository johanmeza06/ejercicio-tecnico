import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ThrottlerGuard } from '@nestjs/throttler';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(process.env.PREFIX ?? 'api');
  const logger = new Logger('Bootstrap');
  // Uso de mis pipes para validaciones de dto
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  // configuración de throttle
  //Configuración de Swagger
  const configSwagger = new DocumentBuilder()
    .setTitle('API')
    .setDescription('API documentation')
    .setVersion('1.0')
    .addTag('doctors')
    .build();
  const documentFactory = () =>
    SwaggerModule.createDocument(app, configSwagger);
  SwaggerModule.setup(`${process.env.PREFIX}/swagger`, app, documentFactory);
  app.enableCors({
    origin: process.env.FRONTEND_URL,
  });
  await app.listen(process.env.PORT ?? 3000);
  logger.log(
    `Server is running on: http://localhost:${process.env.PORT ?? 3000}/${process.env.PREFIX} 🚀🚀`,
  );
  logger.log(
    `Swagger is running on: http://localhost:${process.env.PORT ?? 3000}/${process.env.PREFIX}/swagger 🚀🚀`,
  );
}
bootstrap();
