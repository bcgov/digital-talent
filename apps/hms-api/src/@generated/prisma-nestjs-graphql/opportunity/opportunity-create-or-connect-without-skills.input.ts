import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { OpportunityWhereUniqueInput } from './opportunity-where-unique.input';
import { OpportunityCreateWithoutSkillsInput } from './opportunity-create-without-skills.input';

@InputType()
export class OpportunityCreateOrConnectWithoutSkillsInput {
  @Field(() => OpportunityWhereUniqueInput, { nullable: false })
  @Type(() => OpportunityWhereUniqueInput)
  where!: Prisma.AtLeast<OpportunityWhereUniqueInput, 'id'>;

  @Field(() => OpportunityCreateWithoutSkillsInput, { nullable: false })
  @Type(() => OpportunityCreateWithoutSkillsInput)
  create!: OpportunityCreateWithoutSkillsInput;
}
