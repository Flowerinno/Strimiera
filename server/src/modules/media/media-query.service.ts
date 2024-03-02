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

  /**
   * Fetch movies on initial load and cache results
   * @returns
   */
  async init() {
    try {
      // const preview = await this.moviedb.discoverMovie({
      //   language: 'en-US',
      //   sort_by: 'popularity.desc',
      // });

      const trending = await this.moviedb.moviePopular({
        language: 'en-US',
      });

      // const topRated = await this.moviedb.movieTopRated({
      //   language: 'en-US',
      // });

      return {
        // preview: preview.results,
        trending: trending.results,
        // topRated: topRated.results,
      };
    } catch (error) {
      this.logger.error('Failed to init', error);
    }
  }

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
}
