import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { PrismaService } from 'src/modules/prisma/prisma.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private prisma: PrismaService) {}
  logger = new Logger(AuthMiddleware.name);

  use(req: Request, res: Response, next: NextFunction) {
    this.logger.log('Request from ip: ' + req.ip);

    next();
  }
}
