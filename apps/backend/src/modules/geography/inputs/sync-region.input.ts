import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { GraphQLUUID } from 'graphql-scalars';

@InputType()
export class SyncRegionInput {
  @Field((type) => GraphQLUUID)
  @IsUUID()
  id: string;

  @IsUUID()
  province_id: string;

  @IsNotEmpty()
  @IsString()
  name: string;
}
