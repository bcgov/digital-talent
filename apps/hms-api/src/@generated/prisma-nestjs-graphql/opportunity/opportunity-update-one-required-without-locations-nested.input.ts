import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { OpportunityCreateWithoutLocationsInput } from './opportunity-create-without-locations.input';
import { OpportunityCreateOrConnectWithoutLocationsInput } from './opportunity-create-or-connect-without-locations.input';
import { OpportunityUpsertWithoutLocationsInput } from './opportunity-upsert-without-locations.input';
import { OpportunityWhereUniqueInput } from './opportunity-where-unique.input';
import { OpportunityUpdateToOneWithWhereWithoutLocationsInput } from './opportunity-update-to-one-with-where-without-locations.input';

@InputType()
export class OpportunityUpdateOneRequiredWithoutLocationsNestedInput {
  @Field(() => OpportunityCreateWithoutLocationsInput, { nullable: true })
  @Type(() => OpportunityCreateWithoutLocationsInput)
  create?: OpportunityCreateWithoutLocationsInput;

  @Field(() => OpportunityCreateOrConnectWithoutLocationsInput, { nullable: true })
  @Type(() => OpportunityCreateOrConnectWithoutLocationsInput)
  connectOrCreate?: OpportunityCreateOrConnectWithoutLocationsInput;

  @Field(() => OpportunityUpsertWithoutLocationsInput, { nullable: true })
  @Type(() => OpportunityUpsertWithoutLocationsInput)
  upsert?: OpportunityUpsertWithoutLocationsInput;

  @Field(() => OpportunityWhereUniqueInput, { nullable: true })
  @Type(() => OpportunityWhereUniqueInput)
  connect?: Prisma.AtLeast<OpportunityWhereUniqueInput, 'id'>;

  @Field(() => OpportunityUpdateToOneWithWhereWithoutLocationsInput, { nullable: true })
  @Type(() => OpportunityUpdateToOneWithWhereWithoutLocationsInput)
  update?: OpportunityUpdateToOneWithWhereWithoutLocationsInput;
}
