import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { CompetitionWhereUniqueInput } from './competition-where-unique.input';
import { CompetitionCreateWithoutSkillsInput } from './competition-create-without-skills.input';

@InputType()
export class CompetitionCreateOrConnectWithoutSkillsInput {
  @Field(() => CompetitionWhereUniqueInput, { nullable: false })
  @Type(() => CompetitionWhereUniqueInput)
  where!: Prisma.AtLeast<CompetitionWhereUniqueInput, 'id'>;

  @Field(() => CompetitionCreateWithoutSkillsInput, { nullable: false })
  @Type(() => CompetitionCreateWithoutSkillsInput)
  create!: CompetitionCreateWithoutSkillsInput;
}
