import { Injectable } from '@nestjs/common';
import { Message } from '@sandbox/domain';

@Injectable()
export class AppService {
  getData(): Message {
    return { text: 'Welcome to api!' };
  }
}
