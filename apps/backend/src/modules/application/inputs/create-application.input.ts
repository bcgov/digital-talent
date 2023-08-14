import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, IsUUID } from 'class-validator';
import { GraphQLJSON, GraphQLUUID } from 'graphql-scalars';

@InputType()
export class CreateApplicationInput {
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
