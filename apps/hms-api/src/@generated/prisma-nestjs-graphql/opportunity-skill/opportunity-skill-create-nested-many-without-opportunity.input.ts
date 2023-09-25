import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { OpportunitySkillCreateWithoutOpportunityInput } from './opportunity-skill-create-without-opportunity.input';
import { OpportunitySkillCreateOrConnectWithoutOpportunityInput } from './opportunity-skill-create-or-connect-without-opportunity.input';
import { OpportunitySkillCreateManyOpportunityInputEnvelope } from './opportunity-skill-create-many-opportunity-input-envelope.input';
import { OpportunitySkillWhereUniqueInput } from './opportunity-skill-where-unique.input';

@InputType()
export class OpportunitySkillCreateNestedManyWithoutOpportunityInput {
  @Field(() => [OpportunitySkillCreateWithoutOpportunityInput], { nullable: true })
  @Type(() => OpportunitySkillCreateWithoutOpportunityInput)
  create?: Array<OpportunitySkillCreateWithoutOpportunityInput>;

  @Field(() => [OpportunitySkillCreateOrConnectWithoutOpportunityInput], { nullable: true })
  @Type(() => OpportunitySkillCreateOrConnectWithoutOpportunityInput)
  connectOrCreate?: Array<OpportunitySkillCreateOrConnectWithoutOpportunityInput>;

  @Field(() => OpportunitySkillCreateManyOpportunityInputEnvelope, { nullable: true })
  @Type(() => OpportunitySkillCreateManyOpportunityInputEnvelope)
  createMany?: OpportunitySkillCreateManyOpportunityInputEnvelope;

  @Field(() => [OpportunitySkillWhereUniqueInput], { nullable: true })
  @Type(() => OpportunitySkillWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<OpportunitySkillWhereUniqueInput, 'opportunity_id_skill_id'>>;
}
