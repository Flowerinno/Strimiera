import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserInput {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @MinLength(3)
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  password: string;
}
