import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/*
  O contoller irá transformar a classe em um controlador, uma classe que lida com entradas, chamadas http.
  Dentro do decorator, é possivel solicitar, que todas as rotas que forem acessadas dem estar com fixadas com o que estiver dentro do decorator
*/
// A injeção de depencencia no qual uma classe recebe as dependências de que necessita de uma fonte externa, em vez de criá-las internamente.
@Controller()
export class AppController {
  // ppController recebe uma instância de AppService através do construtor. 
  constructor(private readonly appService: AppService) {}

  // Esse decorador define uma rota http GET é feita para a rota @Get(). É chamada o método getHello
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
