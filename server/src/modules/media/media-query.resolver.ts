import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { MediaQueryService } from './media-query.service';
import { AddFavouriteinput } from './dto/add-favourite.input';
import { AddToFavouriteInput } from 'src/graphql';

@Resolver('MediaQuery')
export class MediaQueryResolver {
  constructor(private readonly mediaQueryService: MediaQueryService) {}

  @Query('searchMovies')
  findAll(@Args('title') title: string) {
    return this.mediaQueryService.searchMovies(title);
  }

  @Query('getMovie')
  findOne(@Args('id') id: number) {
    return 'This action returns a #${id} movie';
  }

  @Query('init')
  init() {
    return this.mediaQueryService.init();
  }

  @Query('getFavourites')
  getFavourites(@Args('userId') userId: string) {
    return this.mediaQueryService.getFavourites(userId);
  }

  @Mutation('addFavourite')
  create(@Args('addToFavourite') addToFavourite: AddFavouriteinput) {
    return this.mediaQueryService.addToFavourite(addToFavourite);
  }
}
