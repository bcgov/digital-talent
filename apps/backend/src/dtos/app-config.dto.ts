import { IsEnum, IsNotEmpty, IsUrl } from 'class-validator';
import { Environment } from '../enums/environment.enum';

export class AppConfigDto {
  @IsEnum(Environment)
  NODE_ENV: Environment;

  @IsNotEmpty()
  // eslint-disable-next-line spaced-comment
  //@IsUrl({ protocols: ['postgresql'] })
  DATABASE_URL: string;

  @IsNotEmpty()
  // @IsUrl({ protocols: ['esdb'] })
  EVENT_STORE_URL: string;

  @IsNotEmpty()
  @IsUrl()
  KEYCLOAK_REALM_URL: string;
}
