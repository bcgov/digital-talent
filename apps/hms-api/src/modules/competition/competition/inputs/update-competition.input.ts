import { Field, InputType } from '@nestjs/graphql';
import { CompetitionCategory } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';
import { GraphQLUUID } from 'graphql-scalars';

@InputType()
export class UpdateCompetitionInput {
  @Field((type) => GraphQLUUID)
  @IsUUID()
  id: string;

  @Field((type) => GraphQLUUID)
  @IsOptional()
  @IsUUID()
  classification_id?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  deltek_id?: string;

  @Field((type) => GraphQLUUID)
  @IsOptional()
  @IsUUID()
  recruiter_id?: string;

  @Field((type) => CompetitionCategory)
  @IsOptional()
  @IsEnum(CompetitionCategory)
  category?: CompetitionCategory;
}
