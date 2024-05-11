import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  /*
    Arquivo que são ponto de entradas na nossa aplicação, geralmente arquivo que vão lidar
    com chamadas Http
  */
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
