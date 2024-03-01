import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { EnvService } from '../env/env.service';

@Injectable()
export class AuthService {
  constructor(
    private jwt: JwtService,
    private env: EnvService,
  ) {}

  async generateToken(payload: { email: string; id: string }) {
    return await this.jwt.signAsync(payload, {
      secret: this.env.get('JWT_SECRET'),
    });
  }

  
  async validateToken(token: string) {
    return await this.jwt.verifyAsync(token, {
      secret: this.env.get('JWT_SECRET'),
    });
  }
}
