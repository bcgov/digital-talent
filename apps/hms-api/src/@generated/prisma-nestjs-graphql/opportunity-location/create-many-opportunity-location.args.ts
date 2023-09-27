import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { OpportunityLocationCreateManyInput } from './opportunity-location-create-many.input';

@ArgsType()
export class CreateManyOpportunityLocationArgs {
  @Field(() => [OpportunityLocationCreateManyInput], { nullable: false })
  @Type(() => OpportunityLocationCreateManyInput)
  data!: Array<OpportunityLocationCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
