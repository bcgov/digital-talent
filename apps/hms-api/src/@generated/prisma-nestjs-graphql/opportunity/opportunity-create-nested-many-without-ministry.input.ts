import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { OpportunityCreateWithoutMinistryInput } from './opportunity-create-without-ministry.input';
import { OpportunityCreateOrConnectWithoutMinistryInput } from './opportunity-create-or-connect-without-ministry.input';
import { OpportunityCreateManyMinistryInputEnvelope } from './opportunity-create-many-ministry-input-envelope.input';
import { OpportunityWhereUniqueInput } from './opportunity-where-unique.input';

@InputType()
export class OpportunityCreateNestedManyWithoutMinistryInput {
  @Field(() => [OpportunityCreateWithoutMinistryInput], { nullable: true })
  @Type(() => OpportunityCreateWithoutMinistryInput)
  create?: Array<OpportunityCreateWithoutMinistryInput>;

  @Field(() => [OpportunityCreateOrConnectWithoutMinistryInput], { nullable: true })
  @Type(() => OpportunityCreateOrConnectWithoutMinistryInput)
  connectOrCreate?: Array<OpportunityCreateOrConnectWithoutMinistryInput>;

  @Field(() => OpportunityCreateManyMinistryInputEnvelope, { nullable: true })
  @Type(() => OpportunityCreateManyMinistryInputEnvelope)
  createMany?: OpportunityCreateManyMinistryInputEnvelope;

  @Field(() => [OpportunityWhereUniqueInput], { nullable: true })
  @Type(() => OpportunityWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<OpportunityWhereUniqueInput, 'id'>>;
}
