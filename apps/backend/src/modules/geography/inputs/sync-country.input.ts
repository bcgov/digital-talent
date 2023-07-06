import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { GraphQLUUID } from 'graphql-scalars';

@InputType()
export class SyncCountryInput {
  @Field((type) => GraphQLUUID)
  @IsUUID()
  id: string;

  @IsNotEmpty()
  @IsString()
  deltek_id: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  code: string;
}
