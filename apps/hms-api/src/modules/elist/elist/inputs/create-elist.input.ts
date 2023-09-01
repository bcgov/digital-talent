import { Field, InputType } from '@nestjs/graphql';
import { IsNumber, IsUUID } from 'class-validator';
import { GraphQLUUID } from 'graphql-scalars';

@InputType()
export class CreateElistInput {
  @Field((type) => GraphQLUUID)
  @IsUUID()
  id: string;

  @Field((type) => GraphQLUUID)
  @IsUUID()
  applicant_id: string;

  @Field((type) => GraphQLUUID)
  @IsUUID()
  competition_id: string;

  @IsNumber()
  rank: number;
}
