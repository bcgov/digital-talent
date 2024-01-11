import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { CompetitionSkillWhereInput } from './competition-skill-where.input';

@ArgsType()
export class DeleteManyCompetitionSkillArgs {
  @Field(() => CompetitionSkillWhereInput, { nullable: true })
  @Type(() => CompetitionSkillWhereInput)
  where?: CompetitionSkillWhereInput;
}
