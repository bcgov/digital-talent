import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { CompetitionCreateWithoutSkillsInput } from './competition-create-without-skills.input';
import { CompetitionCreateOrConnectWithoutSkillsInput } from './competition-create-or-connect-without-skills.input';
import { CompetitionWhereUniqueInput } from './competition-where-unique.input';

@InputType()
export class CompetitionCreateNestedOneWithoutSkillsInput {
  @Field(() => CompetitionCreateWithoutSkillsInput, { nullable: true })
  @Type(() => CompetitionCreateWithoutSkillsInput)
  create?: CompetitionCreateWithoutSkillsInput;

  @Field(() => CompetitionCreateOrConnectWithoutSkillsInput, { nullable: true })
  @Type(() => CompetitionCreateOrConnectWithoutSkillsInput)
  connectOrCreate?: CompetitionCreateOrConnectWithoutSkillsInput;

  @Field(() => CompetitionWhereUniqueInput, { nullable: true })
  @Type(() => CompetitionWhereUniqueInput)
  connect?: Prisma.AtLeast<CompetitionWhereUniqueInput, 'id'>;
}
