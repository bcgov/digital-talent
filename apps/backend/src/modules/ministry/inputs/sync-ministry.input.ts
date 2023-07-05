import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';
import { GraphQLUUID } from 'graphql-scalars';

@InputType()
export class SyncMinistryInput {
  @Field((type) => GraphQLUUID)
  @IsUUID()
  id: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  deltek_id: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  name: string;
}
