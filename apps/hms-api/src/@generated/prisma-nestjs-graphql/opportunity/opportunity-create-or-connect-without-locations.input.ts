import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { OpportunityWhereUniqueInput } from './opportunity-where-unique.input';
import { OpportunityCreateWithoutLocationsInput } from './opportunity-create-without-locations.input';

@InputType()
export class OpportunityCreateOrConnectWithoutLocationsInput {
  @Field(() => OpportunityWhereUniqueInput, { nullable: false })
  @Type(() => OpportunityWhereUniqueInput)
  where!: Prisma.AtLeast<OpportunityWhereUniqueInput, 'id'>;

  @Field(() => OpportunityCreateWithoutLocationsInput, { nullable: false })
  @Type(() => OpportunityCreateWithoutLocationsInput)
  create!: OpportunityCreateWithoutLocationsInput;
}
