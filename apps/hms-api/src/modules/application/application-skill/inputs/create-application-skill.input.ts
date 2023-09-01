import { Field, InputType } from '@nestjs/graphql';
import { IsNumber, IsString, IsUUID } from 'class-validator';
import { GraphQLUUID } from 'graphql-scalars';

@InputType()
export class CreateApplicationSkillInput {
  @Field((type) => GraphQLUUID)
  @IsUUID()
  application_id: string;

  @Field((type) => GraphQLUUID)
  @IsUUID()
  skill_id: string;

  @IsNumber()
  years_experience: number;

  @IsString()
  description: string;
}
