import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { OpportunityCreateWithoutHiring_managerInput } from './opportunity-create-without-hiring-manager.input';
import { OpportunityCreateOrConnectWithoutHiring_managerInput } from './opportunity-create-or-connect-without-hiring-manager.input';
import { OpportunityUpsertWithWhereUniqueWithoutHiring_managerInput } from './opportunity-upsert-with-where-unique-without-hiring-manager.input';
import { OpportunityCreateManyHiring_managerInputEnvelope } from './opportunity-create-many-hiring-manager-input-envelope.input';
import { OpportunityWhereUniqueInput } from './opportunity-where-unique.input';
import { OpportunityUpdateWithWhereUniqueWithoutHiring_managerInput } from './opportunity-update-with-where-unique-without-hiring-manager.input';
import { OpportunityUpdateManyWithWhereWithoutHiring_managerInput } from './opportunity-update-many-with-where-without-hiring-manager.input';
import { OpportunityScalarWhereInput } from './opportunity-scalar-where.input';

@InputType()
export class OpportunityUpdateManyWithoutHiring_managerNestedInput {
  @Field(() => [OpportunityCreateWithoutHiring_managerInput], { nullable: true })
  @Type(() => OpportunityCreateWithoutHiring_managerInput)
  create?: Array<OpportunityCreateWithoutHiring_managerInput>;

  @Field(() => [OpportunityCreateOrConnectWithoutHiring_managerInput], { nullable: true })
  @Type(() => OpportunityCreateOrConnectWithoutHiring_managerInput)
  connectOrCreate?: Array<OpportunityCreateOrConnectWithoutHiring_managerInput>;

  @Field(() => [OpportunityUpsertWithWhereUniqueWithoutHiring_managerInput], { nullable: true })
  @Type(() => OpportunityUpsertWithWhereUniqueWithoutHiring_managerInput)
  upsert?: Array<OpportunityUpsertWithWhereUniqueWithoutHiring_managerInput>;

  @Field(() => OpportunityCreateManyHiring_managerInputEnvelope, { nullable: true })
  @Type(() => OpportunityCreateManyHiring_managerInputEnvelope)
  createMany?: OpportunityCreateManyHiring_managerInputEnvelope;

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

  @Field(() => [OpportunityUpdateWithWhereUniqueWithoutHiring_managerInput], { nullable: true })
  @Type(() => OpportunityUpdateWithWhereUniqueWithoutHiring_managerInput)
  update?: Array<OpportunityUpdateWithWhereUniqueWithoutHiring_managerInput>;

  @Field(() => [OpportunityUpdateManyWithWhereWithoutHiring_managerInput], { nullable: true })
  @Type(() => OpportunityUpdateManyWithWhereWithoutHiring_managerInput)
  updateMany?: Array<OpportunityUpdateManyWithWhereWithoutHiring_managerInput>;

  @Field(() => [OpportunityScalarWhereInput], { nullable: true })
  @Type(() => OpportunityScalarWhereInput)
  deleteMany?: Array<OpportunityScalarWhereInput>;
}
