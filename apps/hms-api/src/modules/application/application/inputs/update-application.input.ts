import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, IsUUID } from 'class-validator';
import { GraphQLUUID } from 'graphql-scalars';
import GraphQLJSON from 'graphql-type-json';

@InputType()
export class UpdateApplicationInput {
  @Field((type) => GraphQLUUID)
  @IsUUID()
  id: string;

  @Field((type) => GraphQLUUID)
  @IsUUID()
  @IsOptional()
  applicant_id?: string;

  @Field(() => GraphQLJSON)
  @IsOptional()
  json?: any;
}
