import { IsNotEmpty, IsUrl } from 'class-validator';

export class EnvironmentDto {
  @IsNotEmpty()
  @IsUrl()
  KEYCLOAK_REALM_URL: string;
}
