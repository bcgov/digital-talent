import { Field, InputType } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';
import { GraphQLUUID } from 'graphql-scalars';

@InputType()
export class DeleteApplicationSkillInput {
  @Field((type) => GraphQLUUID)
  @IsUUID()
  application_id: string;

  @Field((type) => GraphQLUUID)
  @IsUUID()
  skill_id: string;
}
