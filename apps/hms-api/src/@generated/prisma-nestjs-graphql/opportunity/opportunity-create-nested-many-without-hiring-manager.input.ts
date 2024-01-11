import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { OpportunityCreateWithoutHiring_managerInput } from './opportunity-create-without-hiring-manager.input';
import { OpportunityCreateOrConnectWithoutHiring_managerInput } from './opportunity-create-or-connect-without-hiring-manager.input';
import { OpportunityCreateManyHiring_managerInputEnvelope } from './opportunity-create-many-hiring-manager-input-envelope.input';
import { OpportunityWhereUniqueInput } from './opportunity-where-unique.input';

@InputType()
export class OpportunityCreateNestedManyWithoutHiring_managerInput {
  @Field(() => [OpportunityCreateWithoutHiring_managerInput], { nullable: true })
  @Type(() => OpportunityCreateWithoutHiring_managerInput)
  create?: Array<OpportunityCreateWithoutHiring_managerInput>;

  @Field(() => [OpportunityCreateOrConnectWithoutHiring_managerInput], { nullable: true })
  @Type(() => OpportunityCreateOrConnectWithoutHiring_managerInput)
  connectOrCreate?: Array<OpportunityCreateOrConnectWithoutHiring_managerInput>;

  @Field(() => OpportunityCreateManyHiring_managerInputEnvelope, { nullable: true })
  @Type(() => OpportunityCreateManyHiring_managerInputEnvelope)
  createMany?: OpportunityCreateManyHiring_managerInputEnvelope;

  @Field(() => [OpportunityWhereUniqueInput], { nullable: true })
  @Type(() => OpportunityWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<OpportunityWhereUniqueInput, 'id'>>;
}
