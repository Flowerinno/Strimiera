import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { AuthService } from '../auth/auth.service';
import { JwtService } from '@nestjs/jwt';
import { EnvService } from '../env/env.service';

@Module({
  providers: [
    UserResolver,
    UserService,
    PrismaService,
    AuthService,
    JwtService,
    EnvService,
  ],
})
export class UserModule {}
