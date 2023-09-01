import { Field, InputType, registerEnumType } from '@nestjs/graphql';
import { OpportunityInvolvement, WorkOption } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';
import { GraphQLUUID } from 'graphql-scalars';

registerEnumType(OpportunityInvolvement, {
  name: 'OpportunityInvolvement',
  description: 'The competition categories',
});

registerEnumType(WorkOption, {
  name: 'WorkOption',
  description: 'The opportunity work options',
});

@InputType()
export class CreateOpportunityInput {
  @Field((type) => GraphQLUUID)
  @IsUUID()
  id: string;

  @Field((type) => GraphQLUUID)
  @IsUUID()
  competition_id: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  deltek_id: string;

  @Field((type) => GraphQLUUID)
  @IsUUID()
  hiring_manager_id?: string;

  @Field((type) => GraphQLUUID)
  @IsUUID()
  ministry_id: string;

  @Field((type) => OpportunityInvolvement)
  @IsEnum(OpportunityInvolvement)
  involvement: OpportunityInvolvement;

  @Field((type) => WorkOption)
  @IsEnum(WorkOption)
  work_option: WorkOption;

  @IsString()
  description: string;

  @IsString()
  candidate_description: string;

  @IsString()
  team_name: string;

  @IsString()
  team_description: string;

  @IsString()
  work_examples: string;
}
