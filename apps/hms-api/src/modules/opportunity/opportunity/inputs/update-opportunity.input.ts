import { Field, InputType } from '@nestjs/graphql';
import { IsEnum, IsString, IsUUID } from 'class-validator';
import { GraphQLString } from 'graphql';
import { GraphQLUUID } from 'graphql-scalars';
import { OpportunityInvolvement, WorkOption } from '../../../../@generated/prisma-nestjs-graphql';

@InputType()
export class UpdateOpportunityInput {
  @Field((type) => GraphQLUUID)
  @IsUUID()
  id: string;

  @Field((type) => GraphQLUUID)
  @IsUUID()
  competition_id: string;

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

  @Field((type) => GraphQLString)
  @IsString()
  description: string;

  @Field((type) => GraphQLString)
  @IsString()
  candidate_description: string;

  @Field((type) => GraphQLString)
  @IsString()
  team_name: string;

  @Field((type) => GraphQLString)
  @IsString()
  team_description: string;

  @Field((type) => GraphQLString)
  @IsString()
  work_examples: string;
}
