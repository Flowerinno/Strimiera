import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { MediaQueryService } from './media-query.service';
import { CreateMediaQueryInput } from './dto/create-media-query.input';
import { UpdateMediaQueryInput } from './dto/update-media-query.input';

@Resolver('MediaQuery')
export class MediaQueryResolver {
  constructor(private readonly mediaQueryService: MediaQueryService) {}

  @Mutation('createMediaQuery')
  create(
    @Args('createMediaQueryInput') createMediaQueryInput: CreateMediaQueryInput,
  ) {
    return this.mediaQueryService.create(createMediaQueryInput);
  }

  @Query('searchMovies')
  findAll(@Args('title') title: string) {
    return this.mediaQueryService.searchMovies(title);
  }

  @Query('getMovie')
  findOne(@Args('id') id: number) {
    return this.mediaQueryService.findOne(id);
  }

  @Mutation('updateMediaQuery')
  update(
    @Args('updateMediaQueryInput') updateMediaQueryInput: UpdateMediaQueryInput,
  ) {
    return this.mediaQueryService.update(
      updateMediaQueryInput.id,
      updateMediaQueryInput,
    );
  }

  @Mutation('removeMediaQuery')
  remove(@Args('id') id: number) {
    return this.mediaQueryService.remove(id);
  }
}
