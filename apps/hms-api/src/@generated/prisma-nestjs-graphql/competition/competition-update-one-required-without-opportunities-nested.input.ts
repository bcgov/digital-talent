import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { CompetitionCreateWithoutOpportunitiesInput } from './competition-create-without-opportunities.input';
import { CompetitionCreateOrConnectWithoutOpportunitiesInput } from './competition-create-or-connect-without-opportunities.input';
import { CompetitionUpsertWithoutOpportunitiesInput } from './competition-upsert-without-opportunities.input';
import { CompetitionWhereUniqueInput } from './competition-where-unique.input';
import { CompetitionUpdateToOneWithWhereWithoutOpportunitiesInput } from './competition-update-to-one-with-where-without-opportunities.input';

@InputType()
export class CompetitionUpdateOneRequiredWithoutOpportunitiesNestedInput {
  @Field(() => CompetitionCreateWithoutOpportunitiesInput, { nullable: true })
  @Type(() => CompetitionCreateWithoutOpportunitiesInput)
  create?: CompetitionCreateWithoutOpportunitiesInput;

  @Field(() => CompetitionCreateOrConnectWithoutOpportunitiesInput, { nullable: true })
  @Type(() => CompetitionCreateOrConnectWithoutOpportunitiesInput)
  connectOrCreate?: CompetitionCreateOrConnectWithoutOpportunitiesInput;

  @Field(() => CompetitionUpsertWithoutOpportunitiesInput, { nullable: true })
  @Type(() => CompetitionUpsertWithoutOpportunitiesInput)
  upsert?: CompetitionUpsertWithoutOpportunitiesInput;

  @Field(() => CompetitionWhereUniqueInput, { nullable: true })
  @Type(() => CompetitionWhereUniqueInput)
  connect?: Prisma.AtLeast<CompetitionWhereUniqueInput, 'id'>;

  @Field(() => CompetitionUpdateToOneWithWhereWithoutOpportunitiesInput, { nullable: true })
  @Type(() => CompetitionUpdateToOneWithWhereWithoutOpportunitiesInput)
  update?: CompetitionUpdateToOneWithWhereWithoutOpportunitiesInput;
}
