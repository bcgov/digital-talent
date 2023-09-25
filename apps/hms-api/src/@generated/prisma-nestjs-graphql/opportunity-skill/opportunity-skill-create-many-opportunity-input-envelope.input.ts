import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { OpportunitySkillCreateManyOpportunityInput } from './opportunity-skill-create-many-opportunity.input';

@InputType()
export class OpportunitySkillCreateManyOpportunityInputEnvelope {
  @Field(() => [OpportunitySkillCreateManyOpportunityInput], { nullable: false })
  @Type(() => OpportunitySkillCreateManyOpportunityInput)
  data!: Array<OpportunitySkillCreateManyOpportunityInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
