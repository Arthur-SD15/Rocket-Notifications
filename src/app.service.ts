import { Injectable } from '@nestjs/common';


// Esta classe está decorada com @Injectable(), o que indica ao Nest.js que esta classe é um provedor de serviço e pode ser injetada em outras partes da aplicação.
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
