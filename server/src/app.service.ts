import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  healtchCheck() {
    return { status: 'ok' };
  }
}
