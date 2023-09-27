import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { OpportunityCreateWithoutSkillsInput } from './opportunity-create-without-skills.input';
import { OpportunityCreateOrConnectWithoutSkillsInput } from './opportunity-create-or-connect-without-skills.input';
import { OpportunityWhereUniqueInput } from './opportunity-where-unique.input';

@InputType()
export class OpportunityCreateNestedOneWithoutSkillsInput {
  @Field(() => OpportunityCreateWithoutSkillsInput, { nullable: true })
  @Type(() => OpportunityCreateWithoutSkillsInput)
  create?: OpportunityCreateWithoutSkillsInput;

  @Field(() => OpportunityCreateOrConnectWithoutSkillsInput, { nullable: true })
  @Type(() => OpportunityCreateOrConnectWithoutSkillsInput)
  connectOrCreate?: OpportunityCreateOrConnectWithoutSkillsInput;

  @Field(() => OpportunityWhereUniqueInput, { nullable: true })
  @Type(() => OpportunityWhereUniqueInput)
  connect?: Prisma.AtLeast<OpportunityWhereUniqueInput, 'id'>;
}
