import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { MinistryCreateWithoutOpportunitiesInput } from './ministry-create-without-opportunities.input';
import { MinistryCreateOrConnectWithoutOpportunitiesInput } from './ministry-create-or-connect-without-opportunities.input';
import { MinistryUpsertWithoutOpportunitiesInput } from './ministry-upsert-without-opportunities.input';
import { MinistryWhereUniqueInput } from './ministry-where-unique.input';
import { MinistryUpdateToOneWithWhereWithoutOpportunitiesInput } from './ministry-update-to-one-with-where-without-opportunities.input';

@InputType()
export class MinistryUpdateOneRequiredWithoutOpportunitiesNestedInput {
  @Field(() => MinistryCreateWithoutOpportunitiesInput, { nullable: true })
  @Type(() => MinistryCreateWithoutOpportunitiesInput)
  create?: MinistryCreateWithoutOpportunitiesInput;

  @Field(() => MinistryCreateOrConnectWithoutOpportunitiesInput, { nullable: true })
  @Type(() => MinistryCreateOrConnectWithoutOpportunitiesInput)
  connectOrCreate?: MinistryCreateOrConnectWithoutOpportunitiesInput;

  @Field(() => MinistryUpsertWithoutOpportunitiesInput, { nullable: true })
  @Type(() => MinistryUpsertWithoutOpportunitiesInput)
  upsert?: MinistryUpsertWithoutOpportunitiesInput;

  @Field(() => MinistryWhereUniqueInput, { nullable: true })
  @Type(() => MinistryWhereUniqueInput)
  connect?: Prisma.AtLeast<MinistryWhereUniqueInput, 'id'>;

  @Field(() => MinistryUpdateToOneWithWhereWithoutOpportunitiesInput, { nullable: true })
  @Type(() => MinistryUpdateToOneWithWhereWithoutOpportunitiesInput)
  update?: MinistryUpdateToOneWithWhereWithoutOpportunitiesInput;
}
