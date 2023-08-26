import { Field, InputType } from '@nestjs/graphql';
import { IsDate, IsOptional, IsUUID } from 'class-validator';
import { GraphQLUUID } from 'graphql-scalars';

@InputType()
export class DeleteOpportunityInput {
  @Field((type) => GraphQLUUID)
  @IsUUID()
  id: string;

  @IsDate()
  @IsOptional()
  deleted_at?: Date;
}
