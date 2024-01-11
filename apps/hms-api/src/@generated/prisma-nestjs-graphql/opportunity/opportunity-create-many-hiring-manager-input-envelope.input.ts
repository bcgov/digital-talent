import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { OpportunityCreateManyHiring_managerInput } from './opportunity-create-many-hiring-manager.input';

@InputType()
export class OpportunityCreateManyHiring_managerInputEnvelope {
  @Field(() => [OpportunityCreateManyHiring_managerInput], { nullable: false })
  @Type(() => OpportunityCreateManyHiring_managerInput)
  data!: Array<OpportunityCreateManyHiring_managerInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
