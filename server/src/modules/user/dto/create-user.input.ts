import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateUserInput {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsOptional()
  password: string;
}
