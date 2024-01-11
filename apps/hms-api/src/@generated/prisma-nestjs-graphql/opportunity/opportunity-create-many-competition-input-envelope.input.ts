import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { OpportunityCreateManyCompetitionInput } from './opportunity-create-many-competition.input';

@InputType()
export class OpportunityCreateManyCompetitionInputEnvelope {
  @Field(() => [OpportunityCreateManyCompetitionInput], { nullable: false })
  @Type(() => OpportunityCreateManyCompetitionInput)
  data!: Array<OpportunityCreateManyCompetitionInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
