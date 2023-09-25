import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { OpportunityCreateWithoutMinistryInput } from './opportunity-create-without-ministry.input';
import { OpportunityCreateOrConnectWithoutMinistryInput } from './opportunity-create-or-connect-without-ministry.input';
import { OpportunityUpsertWithWhereUniqueWithoutMinistryInput } from './opportunity-upsert-with-where-unique-without-ministry.input';
import { OpportunityCreateManyMinistryInputEnvelope } from './opportunity-create-many-ministry-input-envelope.input';
import { OpportunityWhereUniqueInput } from './opportunity-where-unique.input';
import { OpportunityUpdateWithWhereUniqueWithoutMinistryInput } from './opportunity-update-with-where-unique-without-ministry.input';
import { OpportunityUpdateManyWithWhereWithoutMinistryInput } from './opportunity-update-many-with-where-without-ministry.input';
import { OpportunityScalarWhereInput } from './opportunity-scalar-where.input';

@InputType()
export class OpportunityUpdateManyWithoutMinistryNestedInput {
  @Field(() => [OpportunityCreateWithoutMinistryInput], { nullable: true })
  @Type(() => OpportunityCreateWithoutMinistryInput)
  create?: Array<OpportunityCreateWithoutMinistryInput>;

  @Field(() => [OpportunityCreateOrConnectWithoutMinistryInput], { nullable: true })
  @Type(() => OpportunityCreateOrConnectWithoutMinistryInput)
  connectOrCreate?: Array<OpportunityCreateOrConnectWithoutMinistryInput>;

  @Field(() => [OpportunityUpsertWithWhereUniqueWithoutMinistryInput], { nullable: true })
  @Type(() => OpportunityUpsertWithWhereUniqueWithoutMinistryInput)
  upsert?: Array<OpportunityUpsertWithWhereUniqueWithoutMinistryInput>;

  @Field(() => OpportunityCreateManyMinistryInputEnvelope, { nullable: true })
  @Type(() => OpportunityCreateManyMinistryInputEnvelope)
  createMany?: OpportunityCreateManyMinistryInputEnvelope;

  @Field(() => [OpportunityWhereUniqueInput], { nullable: true })
  @Type(() => OpportunityWhereUniqueInput)
  set?: Array<Prisma.AtLeast<OpportunityWhereUniqueInput, 'id'>>;

  @Field(() => [OpportunityWhereUniqueInput], { nullable: true })
  @Type(() => OpportunityWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<OpportunityWhereUniqueInput, 'id'>>;

  @Field(() => [OpportunityWhereUniqueInput], { nullable: true })
  @Type(() => OpportunityWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<OpportunityWhereUniqueInput, 'id'>>;

  @Field(() => [OpportunityWhereUniqueInput], { nullable: true })
  @Type(() => OpportunityWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<OpportunityWhereUniqueInput, 'id'>>;

  @Field(() => [OpportunityUpdateWithWhereUniqueWithoutMinistryInput], { nullable: true })
  @Type(() => OpportunityUpdateWithWhereUniqueWithoutMinistryInput)
  update?: Array<OpportunityUpdateWithWhereUniqueWithoutMinistryInput>;

  @Field(() => [OpportunityUpdateManyWithWhereWithoutMinistryInput], { nullable: true })
  @Type(() => OpportunityUpdateManyWithWhereWithoutMinistryInput)
  updateMany?: Array<OpportunityUpdateManyWithWhereWithoutMinistryInput>;

  @Field(() => [OpportunityScalarWhereInput], { nullable: true })
  @Type(() => OpportunityScalarWhereInput)
  deleteMany?: Array<OpportunityScalarWhereInput>;
}
