import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { TbUsers } from 'src/modules/users/models/entities/users.entity';

export class CreateUrlDto {
  @IsString()
  @IsNotEmpty()
  target: string;

  @IsString()
  pckd: string;

  @IsNotEmpty()
  enableTracking: boolean;

  hitCount: number;

  @IsString()
  title: string;

  user: TbUsers;
}
