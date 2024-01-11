import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { CompetitionSkillUpdateManyMutationInput } from './competition-skill-update-many-mutation.input';
import { CompetitionSkillWhereInput } from './competition-skill-where.input';

@ArgsType()
export class UpdateManyCompetitionSkillArgs {
  @Field(() => CompetitionSkillUpdateManyMutationInput, { nullable: false })
  @Type(() => CompetitionSkillUpdateManyMutationInput)
  data!: CompetitionSkillUpdateManyMutationInput;

  @Field(() => CompetitionSkillWhereInput, { nullable: true })
  @Type(() => CompetitionSkillWhereInput)
  where?: CompetitionSkillWhereInput;
}
