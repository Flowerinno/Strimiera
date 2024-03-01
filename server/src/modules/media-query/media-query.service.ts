import { Injectable, Logger } from '@nestjs/common';
import { CreateMediaQueryInput } from './dto/create-media-query.input';
import { UpdateMediaQueryInput } from './dto/update-media-query.input';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { EnvService } from 'src/modules/env/env.service';
import { MovieDb } from 'moviedb-promise';

@Injectable()
export class MediaQueryService {
  constructor(
    private prisma: PrismaService,
    private readonly env: EnvService,
  ) {}

  moviedb = new MovieDb(this.env.get('MOVIEDB_API_KEY'));
  logger = new Logger(MediaQueryService.name);

  async create(createMediaQueryInput: CreateMediaQueryInput) {}

  async searchMovies(title: string) {
    try {
      const res = await this.moviedb.searchMovie({
        query: title,
      });

      return res?.results;
    } catch (error) {
      this.logger.error(error);
    }
  }

  async findOne(id: number) {}

  update(id: number, updateMediaQueryInput: UpdateMediaQueryInput) {
    return `This action updates a #${id} mediaQuery`;
  }

  async remove(id: number) {}
}
