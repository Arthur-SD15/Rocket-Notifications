import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { randomUUID } from 'node:crypto'
import { CreateNotificationBody } from './create-notifications-body';

// O controlador transformará a classe em um controlador, responsável por lidar com entradas e chamadas HTTP.
// A injeção de dependência permite que uma classe receba suas dependências de uma fonte externa, em vez de criá-las internamente.
@Controller('notifications')
export class AppController {
  // O Controller recebe uma instância de PrismaService através do construtor.
  constructor(private readonly prisma: PrismaService) {}

  // Esse decorador define uma rota HTTP GET para o endpoint decorado com @Get().
  @Get()
  list() {
    return this.prisma.notification.findMany();
  }

  @Post()
  /*
    O decorador @Body() é utilizado para extrair os dados do corpo da solicitação e passá-los para o parâmetro body. 
    O tipo CreateNotificationBody é um DTO usado para validar e mapear os dados da solicitação.
  */
  async create(@Body() body: CreateNotificationBody) {
    const { content, category, recipientID } = body;

    await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        content,
        category,
        recipientID,
      }
    })
  }
}
