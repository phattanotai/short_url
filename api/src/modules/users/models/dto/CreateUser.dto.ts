import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { Role } from '../enum/role.enum';
import { LoginUser } from './LoginUser.dto';

export class CreateUser extends LoginUser {
  id?: number;

  @IsString()
  @IsNotEmpty()
  @Length(0, 10)
  name: string;

  @IsString()
  @IsNotEmpty()
  @Length(0, 50)
  username: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsOptional()
  @IsString()
  role?: Role;
}
