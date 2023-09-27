import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { OpportunityUpdateWithoutSkillsInput } from './opportunity-update-without-skills.input';
import { OpportunityCreateWithoutSkillsInput } from './opportunity-create-without-skills.input';
import { OpportunityWhereInput } from './opportunity-where.input';

@InputType()
export class OpportunityUpsertWithoutSkillsInput {
  @Field(() => OpportunityUpdateWithoutSkillsInput, { nullable: false })
  @Type(() => OpportunityUpdateWithoutSkillsInput)
  update!: OpportunityUpdateWithoutSkillsInput;

  @Field(() => OpportunityCreateWithoutSkillsInput, { nullable: false })
  @Type(() => OpportunityCreateWithoutSkillsInput)
  create!: OpportunityCreateWithoutSkillsInput;

  @Field(() => OpportunityWhereInput, { nullable: true })
  @Type(() => OpportunityWhereInput)
  where?: OpportunityWhereInput;
}
