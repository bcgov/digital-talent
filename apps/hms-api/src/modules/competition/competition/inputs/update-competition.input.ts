import { Field, InputType } from '@nestjs/graphql';
import { IsEnum, IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';
import { GraphQLUUID } from 'graphql-scalars';
import { CompetitionCategory } from '../../../../@generated/prisma-nestjs-graphql';

@InputType()
export class UpdateCompetitionInput {
  @Field((type) => GraphQLUUID)
  @IsUUID()
  id: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  deltek_id?: string;

  @Field((type) => GraphQLUUID)
  @IsOptional()
  @IsUUID()
  job_description_id?: string;

  @Field((type) => GraphQLUUID)
  @IsOptional()
  @IsUUID()
  recruiter_id?: string;

  @Field((type) => CompetitionCategory)
  @IsOptional()
  @IsEnum(CompetitionCategory)
  category?: CompetitionCategory;
}
