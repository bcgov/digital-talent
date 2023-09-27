import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { OpportunityLocationCreateManyLocationInput } from './opportunity-location-create-many-location.input';

@InputType()
export class OpportunityLocationCreateManyLocationInputEnvelope {
  @Field(() => [OpportunityLocationCreateManyLocationInput], { nullable: false })
  @Type(() => OpportunityLocationCreateManyLocationInput)
  data!: Array<OpportunityLocationCreateManyLocationInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
