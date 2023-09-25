import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { SkillWhereUniqueInput } from './skill-where-unique.input';
import { SkillCreateWithoutCompetitionsInput } from './skill-create-without-competitions.input';

@InputType()
export class SkillCreateOrConnectWithoutCompetitionsInput {
  @Field(() => SkillWhereUniqueInput, { nullable: false })
  @Type(() => SkillWhereUniqueInput)
  where!: Prisma.AtLeast<SkillWhereUniqueInput, 'id'>;

  @Field(() => SkillCreateWithoutCompetitionsInput, { nullable: false })
  @Type(() => SkillCreateWithoutCompetitionsInput)
  create!: SkillCreateWithoutCompetitionsInput;
}
