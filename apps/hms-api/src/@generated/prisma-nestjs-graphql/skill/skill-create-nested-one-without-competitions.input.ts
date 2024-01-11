import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { SkillCreateWithoutCompetitionsInput } from './skill-create-without-competitions.input';
import { SkillCreateOrConnectWithoutCompetitionsInput } from './skill-create-or-connect-without-competitions.input';
import { SkillWhereUniqueInput } from './skill-where-unique.input';

@InputType()
export class SkillCreateNestedOneWithoutCompetitionsInput {
  @Field(() => SkillCreateWithoutCompetitionsInput, { nullable: true })
  @Type(() => SkillCreateWithoutCompetitionsInput)
  create?: SkillCreateWithoutCompetitionsInput;

  @Field(() => SkillCreateOrConnectWithoutCompetitionsInput, { nullable: true })
  @Type(() => SkillCreateOrConnectWithoutCompetitionsInput)
  connectOrCreate?: SkillCreateOrConnectWithoutCompetitionsInput;

  @Field(() => SkillWhereUniqueInput, { nullable: true })
  @Type(() => SkillWhereUniqueInput)
  connect?: Prisma.AtLeast<SkillWhereUniqueInput, 'id'>;
}
