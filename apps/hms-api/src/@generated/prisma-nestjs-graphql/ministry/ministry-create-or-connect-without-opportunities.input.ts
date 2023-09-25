import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { MinistryWhereUniqueInput } from './ministry-where-unique.input';
import { MinistryCreateWithoutOpportunitiesInput } from './ministry-create-without-opportunities.input';

@InputType()
export class MinistryCreateOrConnectWithoutOpportunitiesInput {
  @Field(() => MinistryWhereUniqueInput, { nullable: false })
  @Type(() => MinistryWhereUniqueInput)
  where!: Prisma.AtLeast<MinistryWhereUniqueInput, 'id'>;

  @Field(() => MinistryCreateWithoutOpportunitiesInput, { nullable: false })
  @Type(() => MinistryCreateWithoutOpportunitiesInput)
  create!: MinistryCreateWithoutOpportunitiesInput;
}
