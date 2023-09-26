import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { SkillCreateWithoutOpportunitiesInput } from './skill-create-without-opportunities.input';
import { SkillCreateOrConnectWithoutOpportunitiesInput } from './skill-create-or-connect-without-opportunities.input';
import { SkillWhereUniqueInput } from './skill-where-unique.input';

@InputType()
export class SkillCreateNestedOneWithoutOpportunitiesInput {
  @Field(() => SkillCreateWithoutOpportunitiesInput, { nullable: true })
  @Type(() => SkillCreateWithoutOpportunitiesInput)
  create?: SkillCreateWithoutOpportunitiesInput;

  @Field(() => SkillCreateOrConnectWithoutOpportunitiesInput, { nullable: true })
  @Type(() => SkillCreateOrConnectWithoutOpportunitiesInput)
  connectOrCreate?: SkillCreateOrConnectWithoutOpportunitiesInput;

  @Field(() => SkillWhereUniqueInput, { nullable: true })
  @Type(() => SkillWhereUniqueInput)
  connect?: Prisma.AtLeast<SkillWhereUniqueInput, 'id'>;
}
