import { Field, InputType } from '@nestjs/graphql';
import { IsEnum, IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';
import { GraphQLUUID } from 'graphql-scalars';
import { CompetitionCategory } from '../../../../@generated/prisma-nestjs-graphql';

// registerEnumType(CompetitionCategory, {
//   name: 'CompetitionCategory',
//   description: 'The competition categories',
// });

@InputType()
export class CreateCompetitionInput {
  @Field((type) => GraphQLUUID)
  @IsUUID()
  id: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  deltek_id?: string;

  @Field((type) => GraphQLUUID)
  @IsUUID()
  job_description_id: string;

  @Field((type) => GraphQLUUID)
  @IsOptional()
  @IsUUID()
  recruiter_id?: string;

  @Field((type) => CompetitionCategory)
  @IsEnum(CompetitionCategory)
  category: CompetitionCategory;
}
