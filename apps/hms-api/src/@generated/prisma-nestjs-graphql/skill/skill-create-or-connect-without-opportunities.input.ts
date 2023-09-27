import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { SkillWhereUniqueInput } from './skill-where-unique.input';
import { SkillCreateWithoutOpportunitiesInput } from './skill-create-without-opportunities.input';

@InputType()
export class SkillCreateOrConnectWithoutOpportunitiesInput {
  @Field(() => SkillWhereUniqueInput, { nullable: false })
  @Type(() => SkillWhereUniqueInput)
  where!: Prisma.AtLeast<SkillWhereUniqueInput, 'id'>;

  @Field(() => SkillCreateWithoutOpportunitiesInput, { nullable: false })
  @Type(() => SkillCreateWithoutOpportunitiesInput)
  create!: SkillCreateWithoutOpportunitiesInput;
}
