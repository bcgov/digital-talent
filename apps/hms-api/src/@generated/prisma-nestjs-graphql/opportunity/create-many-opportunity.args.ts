import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { OpportunityCreateManyInput } from './opportunity-create-many.input';

@ArgsType()
export class CreateManyOpportunityArgs {
  @Field(() => [OpportunityCreateManyInput], { nullable: false })
  @Type(() => OpportunityCreateManyInput)
  data!: Array<OpportunityCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
