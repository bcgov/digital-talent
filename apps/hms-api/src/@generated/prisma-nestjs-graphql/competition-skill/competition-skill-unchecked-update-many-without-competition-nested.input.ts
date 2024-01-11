import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { CompetitionSkillCreateWithoutCompetitionInput } from './competition-skill-create-without-competition.input';
import { CompetitionSkillCreateOrConnectWithoutCompetitionInput } from './competition-skill-create-or-connect-without-competition.input';
import { CompetitionSkillUpsertWithWhereUniqueWithoutCompetitionInput } from './competition-skill-upsert-with-where-unique-without-competition.input';
import { CompetitionSkillCreateManyCompetitionInputEnvelope } from './competition-skill-create-many-competition-input-envelope.input';
import { CompetitionSkillWhereUniqueInput } from './competition-skill-where-unique.input';
import { CompetitionSkillUpdateWithWhereUniqueWithoutCompetitionInput } from './competition-skill-update-with-where-unique-without-competition.input';
import { CompetitionSkillUpdateManyWithWhereWithoutCompetitionInput } from './competition-skill-update-many-with-where-without-competition.input';
import { CompetitionSkillScalarWhereInput } from './competition-skill-scalar-where.input';

@InputType()
export class CompetitionSkillUncheckedUpdateManyWithoutCompetitionNestedInput {
  @Field(() => [CompetitionSkillCreateWithoutCompetitionInput], { nullable: true })
  @Type(() => CompetitionSkillCreateWithoutCompetitionInput)
  create?: Array<CompetitionSkillCreateWithoutCompetitionInput>;

  @Field(() => [CompetitionSkillCreateOrConnectWithoutCompetitionInput], { nullable: true })
  @Type(() => CompetitionSkillCreateOrConnectWithoutCompetitionInput)
  connectOrCreate?: Array<CompetitionSkillCreateOrConnectWithoutCompetitionInput>;

  @Field(() => [CompetitionSkillUpsertWithWhereUniqueWithoutCompetitionInput], { nullable: true })
  @Type(() => CompetitionSkillUpsertWithWhereUniqueWithoutCompetitionInput)
  upsert?: Array<CompetitionSkillUpsertWithWhereUniqueWithoutCompetitionInput>;

  @Field(() => CompetitionSkillCreateManyCompetitionInputEnvelope, { nullable: true })
  @Type(() => CompetitionSkillCreateManyCompetitionInputEnvelope)
  createMany?: CompetitionSkillCreateManyCompetitionInputEnvelope;

  @Field(() => [CompetitionSkillWhereUniqueInput], { nullable: true })
  @Type(() => CompetitionSkillWhereUniqueInput)
  set?: Array<Prisma.AtLeast<CompetitionSkillWhereUniqueInput, 'competition_id_skill_id'>>;

  @Field(() => [CompetitionSkillWhereUniqueInput], { nullable: true })
  @Type(() => CompetitionSkillWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<CompetitionSkillWhereUniqueInput, 'competition_id_skill_id'>>;

  @Field(() => [CompetitionSkillWhereUniqueInput], { nullable: true })
  @Type(() => CompetitionSkillWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<CompetitionSkillWhereUniqueInput, 'competition_id_skill_id'>>;

  @Field(() => [CompetitionSkillWhereUniqueInput], { nullable: true })
  @Type(() => CompetitionSkillWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<CompetitionSkillWhereUniqueInput, 'competition_id_skill_id'>>;

  @Field(() => [CompetitionSkillUpdateWithWhereUniqueWithoutCompetitionInput], { nullable: true })
  @Type(() => CompetitionSkillUpdateWithWhereUniqueWithoutCompetitionInput)
  update?: Array<CompetitionSkillUpdateWithWhereUniqueWithoutCompetitionInput>;

  @Field(() => [CompetitionSkillUpdateManyWithWhereWithoutCompetitionInput], { nullable: true })
  @Type(() => CompetitionSkillUpdateManyWithWhereWithoutCompetitionInput)
  updateMany?: Array<CompetitionSkillUpdateManyWithWhereWithoutCompetitionInput>;

  @Field(() => [CompetitionSkillScalarWhereInput], { nullable: true })
  @Type(() => CompetitionSkillScalarWhereInput)
  deleteMany?: Array<CompetitionSkillScalarWhereInput>;
}
