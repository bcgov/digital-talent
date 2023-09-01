import { IsOptional, IsString, IsUUID } from 'class-validator';

export class SyncAccountDto {
  @IsUUID()
  id: string;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  email?: string;

  @IsString({ each: true })
  roles: string[];

  @IsOptional()
  @IsString()
  sub: string;

  @IsOptional()
  @IsString()
  identity_provider: string;
}
