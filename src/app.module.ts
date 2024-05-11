import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './prisma.service';

/* 
  O `app.module.ts` é o ponto de entrada principal de um aplicativo NestJS. 
  É um módulo raiz que serve como o núcleo da aplicação, onde registra todos os outros módulos, controladores e provedores.
*/
// Um módulo acopla vários controladores e provedores.
@Module({
  imports: [],
  // Os controladores são arquivos que servem como pontos de entrada em nossa aplicação, geralmente responsáveis por lidar com chamadas HTTP.
  controllers: [AppController],
  // Os provedores são responsáveis por encapsular a lógica de negócios, o acesso a bancos de dados, a integração com serviços externos e outras funcionalidades reutilizáveis.
  providers: [PrismaService], 
})
export class AppModule {}
