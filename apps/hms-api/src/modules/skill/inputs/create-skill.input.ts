import { Field, InputType } from '@nestjs/graphql';
import { SkillCategory } from '@prisma/client';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { GraphQLUUID } from 'graphql-scalars';

@InputType()
export class CreateSkillInput {
  @Field((type) => GraphQLUUID)
  id: string;

  @Field((type) => SkillCategory)
  @IsEnum(SkillCategory)
  category: SkillCategory;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  description?: string;
}
