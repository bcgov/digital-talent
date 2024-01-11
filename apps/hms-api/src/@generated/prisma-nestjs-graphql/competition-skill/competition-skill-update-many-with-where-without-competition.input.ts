import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { CompetitionSkillScalarWhereInput } from './competition-skill-scalar-where.input';
import { CompetitionSkillUpdateManyMutationInput } from './competition-skill-update-many-mutation.input';

@InputType()
export class CompetitionSkillUpdateManyWithWhereWithoutCompetitionInput {
  @Field(() => CompetitionSkillScalarWhereInput, { nullable: false })
  @Type(() => CompetitionSkillScalarWhereInput)
  where!: CompetitionSkillScalarWhereInput;

  @Field(() => CompetitionSkillUpdateManyMutationInput, { nullable: false })
  @Type(() => CompetitionSkillUpdateManyMutationInput)
  data!: CompetitionSkillUpdateManyMutationInput;
}
