import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { OpportunityCreateWithoutSkillsInput } from './opportunity-create-without-skills.input';
import { OpportunityCreateOrConnectWithoutSkillsInput } from './opportunity-create-or-connect-without-skills.input';
import { OpportunityUpsertWithoutSkillsInput } from './opportunity-upsert-without-skills.input';
import { OpportunityWhereUniqueInput } from './opportunity-where-unique.input';
import { OpportunityUpdateToOneWithWhereWithoutSkillsInput } from './opportunity-update-to-one-with-where-without-skills.input';

@InputType()
export class OpportunityUpdateOneRequiredWithoutSkillsNestedInput {
  @Field(() => OpportunityCreateWithoutSkillsInput, { nullable: true })
  @Type(() => OpportunityCreateWithoutSkillsInput)
  create?: OpportunityCreateWithoutSkillsInput;

  @Field(() => OpportunityCreateOrConnectWithoutSkillsInput, { nullable: true })
  @Type(() => OpportunityCreateOrConnectWithoutSkillsInput)
  connectOrCreate?: OpportunityCreateOrConnectWithoutSkillsInput;

  @Field(() => OpportunityUpsertWithoutSkillsInput, { nullable: true })
  @Type(() => OpportunityUpsertWithoutSkillsInput)
  upsert?: OpportunityUpsertWithoutSkillsInput;

  @Field(() => OpportunityWhereUniqueInput, { nullable: true })
  @Type(() => OpportunityWhereUniqueInput)
  connect?: Prisma.AtLeast<OpportunityWhereUniqueInput, 'id'>;

  @Field(() => OpportunityUpdateToOneWithWhereWithoutSkillsInput, { nullable: true })
  @Type(() => OpportunityUpdateToOneWithWhereWithoutSkillsInput)
  update?: OpportunityUpdateToOneWithWhereWithoutSkillsInput;
}
