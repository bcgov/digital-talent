import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { OpportunityWhereInput } from './opportunity-where.input';
import { OpportunityUpdateWithoutLocationsInput } from './opportunity-update-without-locations.input';

@InputType()
export class OpportunityUpdateToOneWithWhereWithoutLocationsInput {
  @Field(() => OpportunityWhereInput, { nullable: true })
  @Type(() => OpportunityWhereInput)
  where?: OpportunityWhereInput;

  @Field(() => OpportunityUpdateWithoutLocationsInput, { nullable: false })
  @Type(() => OpportunityUpdateWithoutLocationsInput)
  data!: OpportunityUpdateWithoutLocationsInput;
}
