import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

import { Request } from 'express';
import { GqlContextType } from '@nestjs/graphql';
import { AuthService } from 'src/modules/auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    if (context.getType<GqlContextType>() === 'graphql') {
      const request = context.getArgs()[2].req;

      const token = this.extractTokenFromHeader(request);

      if (!token) {
        throw new UnauthorizedException();
      }

      try {
        const res = await this.auth.validateToken(token);
        console.log(res);
      } catch {
        throw new UnauthorizedException();
      }
      return true;
    }
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const authorizationHeader = request?.headers?.authorization;

    if (!authorizationHeader) {
      return undefined;
    }

    const [type, token] = authorizationHeader.split(' ');

    if (type !== 'Bearer' || !token) {
      return undefined;
    }

    return token;
  }
}
