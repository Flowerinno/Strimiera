import { Module } from '@nestjs/common';
import { MediaQueryService } from './media-query.service';
import { MediaQueryResolver } from './media-query.resolver';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { EnvService } from 'src/modules/env/env.service';

@Module({
  providers: [MediaQueryResolver, MediaQueryService, PrismaService, EnvService],
})
export class MediaQueryModule {}
