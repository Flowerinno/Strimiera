import { IsInt, IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class AddFavouriteinput {
  @IsNumber()
  @Min(1)
  movieId: number;

  @IsNumber()
  @Min(1)
  userId: number;
}
