import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:5173', // só o nosso front-end pode acessar por enquanto
    methods: '*', // e vamos permitir todos os methods HTTP:
    /**
     * - GET
     * - HEAD
     * - POST
     * - PUT
     * - PATCH
     * - DELETE
     * - OPTIONS
     * - TRACE
     * - CONNECT
     */
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
