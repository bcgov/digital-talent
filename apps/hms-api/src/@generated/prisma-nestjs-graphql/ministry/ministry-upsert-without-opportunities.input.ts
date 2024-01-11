import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { MinistryUpdateWithoutOpportunitiesInput } from './ministry-update-without-opportunities.input';
import { MinistryCreateWithoutOpportunitiesInput } from './ministry-create-without-opportunities.input';
import { MinistryWhereInput } from './ministry-where.input';

@InputType()
export class MinistryUpsertWithoutOpportunitiesInput {
  @Field(() => MinistryUpdateWithoutOpportunitiesInput, { nullable: false })
  @Type(() => MinistryUpdateWithoutOpportunitiesInput)
  update!: MinistryUpdateWithoutOpportunitiesInput;

  @Field(() => MinistryCreateWithoutOpportunitiesInput, { nullable: false })
  @Type(() => MinistryCreateWithoutOpportunitiesInput)
  create!: MinistryCreateWithoutOpportunitiesInput;

  @Field(() => MinistryWhereInput, { nullable: true })
  @Type(() => MinistryWhereInput)
  where?: MinistryWhereInput;
}
