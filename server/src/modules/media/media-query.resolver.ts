import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { MediaQueryService } from './media-query.service';

@Resolver('MediaQuery')
export class MediaQueryResolver {
  constructor(private readonly mediaQueryService: MediaQueryService) {}

  @Query('searchMovies')
  findAll(@Args('title') title: string) {
    return this.mediaQueryService.searchMovies(title);
  }

  @Query('getMovie')
  findOne(@Args('id') id: number) {
    return this.mediaQueryService.findOne(id);
  }

  @Query('init')
  init() {
    return this.mediaQueryService.init();
  }

  @Mutation('addFavourite')
  create(@Args('id') id: number) {
    return 'fav';
  }
}
