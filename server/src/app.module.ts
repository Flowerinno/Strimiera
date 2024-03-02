import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { MediaQueryModule } from './modules/media/media-query.module';
import { PrismaModule } from './modules/prisma/prisma.module';
import { EnvModule } from './modules/env/env.module';
import { envSchema } from './modules/env/env';
import { ConfigModule } from '@nestjs/config';
import { AuthMiddleware } from './middleware/auth/auth.middleware';
import { PrismaService } from './modules/prisma/prisma.service';
import { UserModule } from './modules/user/user.module';
import { UserResolver } from './modules/user/user.resolver';
import { AuthService } from './modules/auth/auth.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { EnvService } from './modules/env/env.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class',
      },
    }),
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      envFilePath: ['.env'],
      isGlobal: true,
    }),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '7d' },
    }),
    EnvModule,
    MediaQueryModule,
    PrismaModule,
    EnvModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService, AuthService, JwtService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      // .forRoutes(UserResolver);
  }
}
