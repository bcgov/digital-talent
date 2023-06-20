import { IsEnum } from 'class-validator';
import { Environment } from '../enums/environment.enum';

export class AppConfigDto {
  @IsEnum(Environment)
  NODE_ENV: Environment;
}
