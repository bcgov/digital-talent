import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { OpportunityLocationCreateManyOpportunityInput } from './opportunity-location-create-many-opportunity.input';

@InputType()
export class OpportunityLocationCreateManyOpportunityInputEnvelope {
  @Field(() => [OpportunityLocationCreateManyOpportunityInput], { nullable: false })
  @Type(() => OpportunityLocationCreateManyOpportunityInput)
  data!: Array<OpportunityLocationCreateManyOpportunityInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
