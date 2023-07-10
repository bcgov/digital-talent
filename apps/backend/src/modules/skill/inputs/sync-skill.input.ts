import { Field, InputType } from '@nestjs/graphql';
import { SkillCategory } from '@prisma/client';
import { IsIn, IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';
import { GraphQLUUID } from 'graphql-scalars';

@InputType()
export class SyncSkillInput {
  @Field((type) => GraphQLUUID)
  @IsUUID()
  id: string;

  @IsIn(Object.values(SkillCategory))
  category: SkillCategory;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  description?: string;
}
