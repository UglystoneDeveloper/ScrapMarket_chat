import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  

  app.enableCors({
    origin: /^(https:\/\/([^\.]*\.)?example\.com)$/i,
  });

    // const corsOptions: CorsOptions = {
    //   origin: '*',
    //   methods: ['GET', 'POST', 'PUT', 'DELETE'],
    //   allowedHeaders: ['*'],
    //   exposedHeaders: ['*'],
    //   credentials: true,
    // };
    // app.enableCors(corsOptions);
  
    await app.listen(3000);

}

bootstrap();
