import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  
  getHello(): string {
    return 'Hello World!';
  }

  getUser(id: number) {
    return {
      id,
      name: 'John Doe',
      email: 'john@example.com',
    }
  }
}
