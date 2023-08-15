import { Field, InputType } from '@nestjs/graphql';
import { IsNumber, IsOptional, IsUUID } from 'class-validator';
import { GraphQLUUID } from 'graphql-scalars';

@InputType()
export class UpdateApplicationLocationInput {
  @Field((type) => GraphQLUUID)
  @IsUUID()
  @IsOptional()
  application_id?: string;

  @Field((type) => GraphQLUUID)
  @IsUUID()
  @IsOptional()
  location_id?: string;

  @IsNumber()
  @IsOptional()
  rank?: number;
}
