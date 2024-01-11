import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { OpportunitySkillCreateWithoutOpportunityInput } from './opportunity-skill-create-without-opportunity.input';
import { OpportunitySkillCreateOrConnectWithoutOpportunityInput } from './opportunity-skill-create-or-connect-without-opportunity.input';
import { OpportunitySkillUpsertWithWhereUniqueWithoutOpportunityInput } from './opportunity-skill-upsert-with-where-unique-without-opportunity.input';
import { OpportunitySkillCreateManyOpportunityInputEnvelope } from './opportunity-skill-create-many-opportunity-input-envelope.input';
import { OpportunitySkillWhereUniqueInput } from './opportunity-skill-where-unique.input';
import { OpportunitySkillUpdateWithWhereUniqueWithoutOpportunityInput } from './opportunity-skill-update-with-where-unique-without-opportunity.input';
import { OpportunitySkillUpdateManyWithWhereWithoutOpportunityInput } from './opportunity-skill-update-many-with-where-without-opportunity.input';
import { OpportunitySkillScalarWhereInput } from './opportunity-skill-scalar-where.input';

@InputType()
export class OpportunitySkillUpdateManyWithoutOpportunityNestedInput {
  @Field(() => [OpportunitySkillCreateWithoutOpportunityInput], { nullable: true })
  @Type(() => OpportunitySkillCreateWithoutOpportunityInput)
  create?: Array<OpportunitySkillCreateWithoutOpportunityInput>;

  @Field(() => [OpportunitySkillCreateOrConnectWithoutOpportunityInput], { nullable: true })
  @Type(() => OpportunitySkillCreateOrConnectWithoutOpportunityInput)
  connectOrCreate?: Array<OpportunitySkillCreateOrConnectWithoutOpportunityInput>;

  @Field(() => [OpportunitySkillUpsertWithWhereUniqueWithoutOpportunityInput], { nullable: true })
  @Type(() => OpportunitySkillUpsertWithWhereUniqueWithoutOpportunityInput)
  upsert?: Array<OpportunitySkillUpsertWithWhereUniqueWithoutOpportunityInput>;

  @Field(() => OpportunitySkillCreateManyOpportunityInputEnvelope, { nullable: true })
  @Type(() => OpportunitySkillCreateManyOpportunityInputEnvelope)
  createMany?: OpportunitySkillCreateManyOpportunityInputEnvelope;

  @Field(() => [OpportunitySkillWhereUniqueInput], { nullable: true })
  @Type(() => OpportunitySkillWhereUniqueInput)
  set?: Array<Prisma.AtLeast<OpportunitySkillWhereUniqueInput, 'opportunity_id_skill_id'>>;

  @Field(() => [OpportunitySkillWhereUniqueInput], { nullable: true })
  @Type(() => OpportunitySkillWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<OpportunitySkillWhereUniqueInput, 'opportunity_id_skill_id'>>;

  @Field(() => [OpportunitySkillWhereUniqueInput], { nullable: true })
  @Type(() => OpportunitySkillWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<OpportunitySkillWhereUniqueInput, 'opportunity_id_skill_id'>>;

  @Field(() => [OpportunitySkillWhereUniqueInput], { nullable: true })
  @Type(() => OpportunitySkillWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<OpportunitySkillWhereUniqueInput, 'opportunity_id_skill_id'>>;

  @Field(() => [OpportunitySkillUpdateWithWhereUniqueWithoutOpportunityInput], { nullable: true })
  @Type(() => OpportunitySkillUpdateWithWhereUniqueWithoutOpportunityInput)
  update?: Array<OpportunitySkillUpdateWithWhereUniqueWithoutOpportunityInput>;

  @Field(() => [OpportunitySkillUpdateManyWithWhereWithoutOpportunityInput], { nullable: true })
  @Type(() => OpportunitySkillUpdateManyWithWhereWithoutOpportunityInput)
  updateMany?: Array<OpportunitySkillUpdateManyWithWhereWithoutOpportunityInput>;

  @Field(() => [OpportunitySkillScalarWhereInput], { nullable: true })
  @Type(() => OpportunitySkillScalarWhereInput)
  deleteMany?: Array<OpportunitySkillScalarWhereInput>;
}
