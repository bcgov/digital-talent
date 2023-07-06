import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { GraphQLUUID } from 'graphql-scalars';

@InputType()
export class SyncProvinceInput {
  @Field((type) => GraphQLUUID)
  @IsUUID()
  id: string;

  @IsUUID()
  country_id: string;

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
