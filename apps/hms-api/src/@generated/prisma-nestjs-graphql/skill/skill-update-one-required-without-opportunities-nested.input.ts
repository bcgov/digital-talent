import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { SkillCreateWithoutOpportunitiesInput } from './skill-create-without-opportunities.input';
import { SkillCreateOrConnectWithoutOpportunitiesInput } from './skill-create-or-connect-without-opportunities.input';
import { SkillUpsertWithoutOpportunitiesInput } from './skill-upsert-without-opportunities.input';
import { SkillWhereUniqueInput } from './skill-where-unique.input';
import { SkillUpdateToOneWithWhereWithoutOpportunitiesInput } from './skill-update-to-one-with-where-without-opportunities.input';

@InputType()
export class SkillUpdateOneRequiredWithoutOpportunitiesNestedInput {
  @Field(() => SkillCreateWithoutOpportunitiesInput, { nullable: true })
  @Type(() => SkillCreateWithoutOpportunitiesInput)
  create?: SkillCreateWithoutOpportunitiesInput;

  @Field(() => SkillCreateOrConnectWithoutOpportunitiesInput, { nullable: true })
  @Type(() => SkillCreateOrConnectWithoutOpportunitiesInput)
  connectOrCreate?: SkillCreateOrConnectWithoutOpportunitiesInput;

  @Field(() => SkillUpsertWithoutOpportunitiesInput, { nullable: true })
  @Type(() => SkillUpsertWithoutOpportunitiesInput)
  upsert?: SkillUpsertWithoutOpportunitiesInput;

  @Field(() => SkillWhereUniqueInput, { nullable: true })
  @Type(() => SkillWhereUniqueInput)
  connect?: Prisma.AtLeast<SkillWhereUniqueInput, 'id'>;

  @Field(() => SkillUpdateToOneWithWhereWithoutOpportunitiesInput, { nullable: true })
  @Type(() => SkillUpdateToOneWithWhereWithoutOpportunitiesInput)
  update?: SkillUpdateToOneWithWhereWithoutOpportunitiesInput;
}
