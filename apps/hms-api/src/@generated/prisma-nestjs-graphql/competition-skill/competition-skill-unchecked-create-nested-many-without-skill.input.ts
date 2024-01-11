import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { CompetitionSkillCreateWithoutSkillInput } from './competition-skill-create-without-skill.input';
import { CompetitionSkillCreateOrConnectWithoutSkillInput } from './competition-skill-create-or-connect-without-skill.input';
import { CompetitionSkillCreateManySkillInputEnvelope } from './competition-skill-create-many-skill-input-envelope.input';
import { CompetitionSkillWhereUniqueInput } from './competition-skill-where-unique.input';

@InputType()
export class CompetitionSkillUncheckedCreateNestedManyWithoutSkillInput {
  @Field(() => [CompetitionSkillCreateWithoutSkillInput], { nullable: true })
  @Type(() => CompetitionSkillCreateWithoutSkillInput)
  create?: Array<CompetitionSkillCreateWithoutSkillInput>;

  @Field(() => [CompetitionSkillCreateOrConnectWithoutSkillInput], { nullable: true })
  @Type(() => CompetitionSkillCreateOrConnectWithoutSkillInput)
  connectOrCreate?: Array<CompetitionSkillCreateOrConnectWithoutSkillInput>;

  @Field(() => CompetitionSkillCreateManySkillInputEnvelope, { nullable: true })
  @Type(() => CompetitionSkillCreateManySkillInputEnvelope)
  createMany?: CompetitionSkillCreateManySkillInputEnvelope;

  @Field(() => [CompetitionSkillWhereUniqueInput], { nullable: true })
  @Type(() => CompetitionSkillWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<CompetitionSkillWhereUniqueInput, 'competition_id_skill_id'>>;
}
