import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ApplicationSkillWhereInput } from './application-skill-where.input';

@ArgsType()
export class DeleteManyApplicationSkillArgs {
  @Field(() => ApplicationSkillWhereInput, { nullable: true })
  @Type(() => ApplicationSkillWhereInput)
  where?: ApplicationSkillWhereInput;
}
