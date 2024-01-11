import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { CompetitionCreateWithoutSkillsInput } from './competition-create-without-skills.input';
import { CompetitionCreateOrConnectWithoutSkillsInput } from './competition-create-or-connect-without-skills.input';
import { CompetitionUpsertWithoutSkillsInput } from './competition-upsert-without-skills.input';
import { CompetitionWhereUniqueInput } from './competition-where-unique.input';
import { CompetitionUpdateToOneWithWhereWithoutSkillsInput } from './competition-update-to-one-with-where-without-skills.input';

@InputType()
export class CompetitionUpdateOneRequiredWithoutSkillsNestedInput {
  @Field(() => CompetitionCreateWithoutSkillsInput, { nullable: true })
  @Type(() => CompetitionCreateWithoutSkillsInput)
  create?: CompetitionCreateWithoutSkillsInput;

  @Field(() => CompetitionCreateOrConnectWithoutSkillsInput, { nullable: true })
  @Type(() => CompetitionCreateOrConnectWithoutSkillsInput)
  connectOrCreate?: CompetitionCreateOrConnectWithoutSkillsInput;

  @Field(() => CompetitionUpsertWithoutSkillsInput, { nullable: true })
  @Type(() => CompetitionUpsertWithoutSkillsInput)
  upsert?: CompetitionUpsertWithoutSkillsInput;

  @Field(() => CompetitionWhereUniqueInput, { nullable: true })
  @Type(() => CompetitionWhereUniqueInput)
  connect?: Prisma.AtLeast<CompetitionWhereUniqueInput, 'id'>;

  @Field(() => CompetitionUpdateToOneWithWhereWithoutSkillsInput, { nullable: true })
  @Type(() => CompetitionUpdateToOneWithWhereWithoutSkillsInput)
  update?: CompetitionUpdateToOneWithWhereWithoutSkillsInput;
}
