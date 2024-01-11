import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { OpportunityCreateManyMinistryInput } from './opportunity-create-many-ministry.input';

@InputType()
export class OpportunityCreateManyMinistryInputEnvelope {
  @Field(() => [OpportunityCreateManyMinistryInput], { nullable: false })
  @Type(() => OpportunityCreateManyMinistryInput)
  data!: Array<OpportunityCreateManyMinistryInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
