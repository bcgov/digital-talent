import { Field, InputType } from '@nestjs/graphql';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { GraphQLUUID } from 'graphql-scalars';
import { SkillCategory } from '../../../@generated/prisma-nestjs-graphql';

@InputType()
export class UpdateSkillInput {
  @Field((type) => GraphQLUUID)
  id: string;

  @IsOptional()
  @Field((type) => SkillCategory)
  @IsEnum(SkillCategory)
  category?: SkillCategory;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  name?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  description?: string;
}
