import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { OpportunityUpdateWithoutLocationsInput } from './opportunity-update-without-locations.input';
import { OpportunityCreateWithoutLocationsInput } from './opportunity-create-without-locations.input';
import { OpportunityWhereInput } from './opportunity-where.input';

@InputType()
export class OpportunityUpsertWithoutLocationsInput {
  @Field(() => OpportunityUpdateWithoutLocationsInput, { nullable: false })
  @Type(() => OpportunityUpdateWithoutLocationsInput)
  update!: OpportunityUpdateWithoutLocationsInput;

  @Field(() => OpportunityCreateWithoutLocationsInput, { nullable: false })
  @Type(() => OpportunityCreateWithoutLocationsInput)
  create!: OpportunityCreateWithoutLocationsInput;

  @Field(() => OpportunityWhereInput, { nullable: true })
  @Type(() => OpportunityWhereInput)
  where?: OpportunityWhereInput;
}
