import { Field, InputType } from '@nestjs/graphql';
import { IsNumber, IsOptional, IsUUID } from 'class-validator';
import { GraphQLUUID } from 'graphql-scalars';

@InputType()
export class UpdateElistInput {
  @Field((type) => GraphQLUUID)
  @IsUUID()
  id: string;

  @Field((type) => GraphQLUUID)
  @IsUUID()
  @IsOptional()
  applicant_id?: string;

  @Field((type) => GraphQLUUID)
  @IsUUID()
  @IsOptional()
  competition_id?: string;

  @IsNumber()
  @IsOptional()
  rank?: number;
}
