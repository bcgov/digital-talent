import { Field, InputType, registerEnumType } from '@nestjs/graphql';
import { CompetitionCategory } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';
import { GraphQLUUID } from 'graphql-scalars';

registerEnumType(CompetitionCategory, {
  name: 'CompetitionCategory',
  description: 'The competition categories',
});

@InputType()
export class CreateCompetitionInput {
  @Field((type) => GraphQLUUID)
  @IsUUID()
  id: string;

  @Field((type) => GraphQLUUID)
  @IsUUID()
  classification_id: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  deltek_id?: string;

  @Field((type) => GraphQLUUID)
  @IsOptional()
  @IsUUID()
  recruiter_id?: string;

  @Field((type) => CompetitionCategory)
  @IsEnum(CompetitionCategory)
  category: CompetitionCategory;
}
