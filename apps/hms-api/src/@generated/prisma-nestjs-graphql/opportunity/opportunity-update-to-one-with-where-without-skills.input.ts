import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { OpportunityWhereInput } from './opportunity-where.input';
import { OpportunityUpdateWithoutSkillsInput } from './opportunity-update-without-skills.input';

@InputType()
export class OpportunityUpdateToOneWithWhereWithoutSkillsInput {
  @Field(() => OpportunityWhereInput, { nullable: true })
  @Type(() => OpportunityWhereInput)
  where?: OpportunityWhereInput;

  @Field(() => OpportunityUpdateWithoutSkillsInput, { nullable: false })
  @Type(() => OpportunityUpdateWithoutSkillsInput)
  data!: OpportunityUpdateWithoutSkillsInput;
}
