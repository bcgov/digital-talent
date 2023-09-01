import { InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class DeleteIdentityInput {
  @IsString()
  @IsNotEmpty()
  identity_provider: string;

  @IsString()
  @IsNotEmpty()
  sub: string;
}
