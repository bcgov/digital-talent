import { Field, InputType } from '@nestjs/graphql';
import { ApplicationSkillWhereInput } from './application-skill-where.input';

@InputType()
export class ApplicationSkillListRelationFilter {
  @Field(() => ApplicationSkillWhereInput, { nullable: true })
  every?: ApplicationSkillWhereInput;

  @Field(() => ApplicationSkillWhereInput, { nullable: true })
  some?: ApplicationSkillWhereInput;

  @Field(() => ApplicationSkillWhereInput, { nullable: true })
  none?: ApplicationSkillWhereInput;
}
