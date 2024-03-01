import { IsEmail, IsNotEmpty, MinLength, IsString } from 'class-validator';

export class LoginUserInput {
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
