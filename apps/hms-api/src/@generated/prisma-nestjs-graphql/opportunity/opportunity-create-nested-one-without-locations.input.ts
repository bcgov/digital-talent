import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { OpportunityCreateWithoutLocationsInput } from './opportunity-create-without-locations.input';
import { OpportunityCreateOrConnectWithoutLocationsInput } from './opportunity-create-or-connect-without-locations.input';
import { OpportunityWhereUniqueInput } from './opportunity-where-unique.input';

@InputType()
export class OpportunityCreateNestedOneWithoutLocationsInput {
  @Field(() => OpportunityCreateWithoutLocationsInput, { nullable: true })
  @Type(() => OpportunityCreateWithoutLocationsInput)
  create?: OpportunityCreateWithoutLocationsInput;

  @Field(() => OpportunityCreateOrConnectWithoutLocationsInput, { nullable: true })
  @Type(() => OpportunityCreateOrConnectWithoutLocationsInput)
  connectOrCreate?: OpportunityCreateOrConnectWithoutLocationsInput;

  @Field(() => OpportunityWhereUniqueInput, { nullable: true })
  @Type(() => OpportunityWhereUniqueInput)
  connect?: Prisma.AtLeast<OpportunityWhereUniqueInput, 'id'>;
}
