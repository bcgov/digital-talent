import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';
import { GraphQLUUID } from 'graphql-scalars';

@InputType()
export class CreateIdentityInput {
  @Field((type) => GraphQLUUID)
  @IsString()
  user_id: string;

  @IsString()
  @IsNotEmpty()
  sub: string;

  @IsString()
  @IsNotEmpty()
  identity_provider: string;
}
