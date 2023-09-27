import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { CompetitionSkillCreateWithoutCompetitionInput } from './competition-skill-create-without-competition.input';
import { CompetitionSkillCreateOrConnectWithoutCompetitionInput } from './competition-skill-create-or-connect-without-competition.input';
import { CompetitionSkillCreateManyCompetitionInputEnvelope } from './competition-skill-create-many-competition-input-envelope.input';
import { CompetitionSkillWhereUniqueInput } from './competition-skill-where-unique.input';

@InputType()
export class CompetitionSkillUncheckedCreateNestedManyWithoutCompetitionInput {
  @Field(() => [CompetitionSkillCreateWithoutCompetitionInput], { nullable: true })
  @Type(() => CompetitionSkillCreateWithoutCompetitionInput)
  create?: Array<CompetitionSkillCreateWithoutCompetitionInput>;

  @Field(() => [CompetitionSkillCreateOrConnectWithoutCompetitionInput], { nullable: true })
  @Type(() => CompetitionSkillCreateOrConnectWithoutCompetitionInput)
  connectOrCreate?: Array<CompetitionSkillCreateOrConnectWithoutCompetitionInput>;

  @Field(() => CompetitionSkillCreateManyCompetitionInputEnvelope, { nullable: true })
  @Type(() => CompetitionSkillCreateManyCompetitionInputEnvelope)
  createMany?: CompetitionSkillCreateManyCompetitionInputEnvelope;

  @Field(() => [CompetitionSkillWhereUniqueInput], { nullable: true })
  @Type(() => CompetitionSkillWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<CompetitionSkillWhereUniqueInput, 'competition_id_skill_id'>>;
}
