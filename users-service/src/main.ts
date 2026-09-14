import { NestFactory } from '@nestjs/core';
import { AppModule, ObserveInstrument } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {

  const port = process.env.PORT ?? 3001;

  const app = await NestFactory.createMicroservice(AppModule, {
    // instrument: ObserveInstrument,
    transport: Transport.TCP,
    options: {
      host: '0.0.0.0',
      port: port
    }
  });

  await app.listen();
  console.log(`Microservice is listening on port ${port}`);
}
bootstrap();
