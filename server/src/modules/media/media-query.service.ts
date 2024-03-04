import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { EnvService } from 'src/modules/env/env.service';
import { MovieDb } from 'moviedb-promise';
import { AddFavouriteinput } from './dto/add-favourite.input';

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

  async getFavourites(userId: string) {
    try {
      const favourites = await this.prisma.favourite.findMany({
        where: {
          userId: Number(userId),
        },
      });

      return favourites;
    } catch (error) {
      this.logger.error(error);
    }
  }

  async addToFavourite({ movieId, userId }: AddFavouriteinput) {
    try {
      const movie = await this.moviedb.movieInfo({
        id: movieId,
      });

      if (movie) {
        const user = await this.prisma.user.findUnique({
          where: {
            id: userId,
          },
          select: {
            Favourite: true,
            id: true,
          },
        });

        if (!user) {
          return { message: 'User not found' };
        }

        if (user.Favourite.find((fav) => fav.id === movie.id)) {
          const favourite = await this.prisma.favourite.delete({
            where: {
              id: movie.id,
              userId: user.id,
            },
          });

          if (favourite) {
            return { message: 'Removed from favourite' };
          }

          return { message: 'Failed to remove from favourite' };
        }

        const favourite = await this.prisma.favourite.create({
          data: {
            id: movie.id,
            title: movie.title,
            poster_path: movie.poster_path,
            release_date: movie.release_date,
            userId: user.id,
          },
        });

        if (favourite) {
          return { message: 'Added to favourite' };
        }
      } else {
        return { message: 'Movie not found' };
      }
    } catch (error) {
      this.logger.error(error);
      return { message: 'Failed to add to favourite.' };
    }
  }

  async removeFromFavourite({ movieId, userId }: AddFavouriteinput) {
    try {
      const user = await this.prisma.user.findUnique({
        where: {
          id: userId,
        },
      });

      if (!user) {
        return { message: 'User not found' };
      }

      const favourite = await this.prisma.favourite.delete({
        where: {
          id: movieId,
          userId: user.id,
        },
      });

      if (favourite) {
        return { message: 'Removed from favourite' };
      }
    } catch (error) {
      this.logger.error(error);
      return { message: 'Failed to remove from favourite.' };
    }
  }
}
