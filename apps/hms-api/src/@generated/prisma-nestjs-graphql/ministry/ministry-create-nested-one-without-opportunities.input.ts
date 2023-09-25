import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { MinistryCreateWithoutOpportunitiesInput } from './ministry-create-without-opportunities.input';
import { MinistryCreateOrConnectWithoutOpportunitiesInput } from './ministry-create-or-connect-without-opportunities.input';
import { MinistryWhereUniqueInput } from './ministry-where-unique.input';

@InputType()
export class MinistryCreateNestedOneWithoutOpportunitiesInput {
  @Field(() => MinistryCreateWithoutOpportunitiesInput, { nullable: true })
  @Type(() => MinistryCreateWithoutOpportunitiesInput)
  create?: MinistryCreateWithoutOpportunitiesInput;

  @Field(() => MinistryCreateOrConnectWithoutOpportunitiesInput, { nullable: true })
  @Type(() => MinistryCreateOrConnectWithoutOpportunitiesInput)
  connectOrCreate?: MinistryCreateOrConnectWithoutOpportunitiesInput;

  @Field(() => MinistryWhereUniqueInput, { nullable: true })
  @Type(() => MinistryWhereUniqueInput)
  connect?: Prisma.AtLeast<MinistryWhereUniqueInput, 'id'>;
}
