import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateMediaQueryInput {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  message: string;
}
