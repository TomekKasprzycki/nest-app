import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';
import { ConfigService } from '@nestjs/config/dist';

async function bootstrap() {
  const config: ConfigService = new ConfigService();
  const PORT = config.get('PORT');
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  await app.listen(PORT);
  console.log(`[sever] App works at port: http://localhost:${PORT}`);
}
bootstrap();
