import { Field, InputType } from '@nestjs/graphql';
import { CompetitionSkillWhereInput } from './competition-skill-where.input';

@InputType()
export class CompetitionSkillListRelationFilter {
  @Field(() => CompetitionSkillWhereInput, { nullable: true })
  every?: CompetitionSkillWhereInput;

  @Field(() => CompetitionSkillWhereInput, { nullable: true })
  some?: CompetitionSkillWhereInput;

  @Field(() => CompetitionSkillWhereInput, { nullable: true })
  none?: CompetitionSkillWhereInput;
}
