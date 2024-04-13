import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(@Inject('AUTH_SERVICE') private authService: ClientProxy) {}

  @Get()
  async getUser() {
    console.log('hit ');
    return this.authService.send(
      { cmd: 'get-user' },
      { hello: 'Manoj Santra' },
    );
  }
}
