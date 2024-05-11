import { Injectable, OnModuleInit, INestApplication } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

// Este é um serviço no NestJS chamado PrismaService, que é usado para interagir com o banco de dados através do Prisma.
// Este decorator indica que a classe PrismaService é um serviço gerenciado pelo sistema de injeção de dependência do NestJS.
// Esta classe está decorada com @Injectable(), o que indica ao Nest.js que está classe é um provedor de serviço e pode ser injetada em outras partes da aplicação.
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    process.on('beforeExit', async () => {
        await app.close();
    }); 
  }      
}