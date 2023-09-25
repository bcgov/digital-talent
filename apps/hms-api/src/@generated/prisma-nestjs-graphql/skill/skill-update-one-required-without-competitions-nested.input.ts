import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { SkillCreateWithoutCompetitionsInput } from './skill-create-without-competitions.input';
import { SkillCreateOrConnectWithoutCompetitionsInput } from './skill-create-or-connect-without-competitions.input';
import { SkillUpsertWithoutCompetitionsInput } from './skill-upsert-without-competitions.input';
import { SkillWhereUniqueInput } from './skill-where-unique.input';
import { SkillUpdateToOneWithWhereWithoutCompetitionsInput } from './skill-update-to-one-with-where-without-competitions.input';

@InputType()
export class SkillUpdateOneRequiredWithoutCompetitionsNestedInput {
  @Field(() => SkillCreateWithoutCompetitionsInput, { nullable: true })
  @Type(() => SkillCreateWithoutCompetitionsInput)
  create?: SkillCreateWithoutCompetitionsInput;

  @Field(() => SkillCreateOrConnectWithoutCompetitionsInput, { nullable: true })
  @Type(() => SkillCreateOrConnectWithoutCompetitionsInput)
  connectOrCreate?: SkillCreateOrConnectWithoutCompetitionsInput;

  @Field(() => SkillUpsertWithoutCompetitionsInput, { nullable: true })
  @Type(() => SkillUpsertWithoutCompetitionsInput)
  upsert?: SkillUpsertWithoutCompetitionsInput;

  @Field(() => SkillWhereUniqueInput, { nullable: true })
  @Type(() => SkillWhereUniqueInput)
  connect?: Prisma.AtLeast<SkillWhereUniqueInput, 'id'>;

  @Field(() => SkillUpdateToOneWithWhereWithoutCompetitionsInput, { nullable: true })
  @Type(() => SkillUpdateToOneWithWhereWithoutCompetitionsInput)
  update?: SkillUpdateToOneWithWhereWithoutCompetitionsInput;
}
