import { Controller, Get, Inject, Param } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('users')
export class AppController {
  constructor(
    @Inject('USERS_SERVICE')
    private readonly usersClient: ClientProxy,
  ) { }

  @Get(':id')
  getUser(@Param('id') id: string) {
    return this.usersClient.send('get_user', Number(id));
  }

}
