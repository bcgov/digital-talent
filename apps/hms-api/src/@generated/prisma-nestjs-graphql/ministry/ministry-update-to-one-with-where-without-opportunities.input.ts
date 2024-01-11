import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { MinistryWhereInput } from './ministry-where.input';
import { MinistryUpdateWithoutOpportunitiesInput } from './ministry-update-without-opportunities.input';

@InputType()
export class MinistryUpdateToOneWithWhereWithoutOpportunitiesInput {
  @Field(() => MinistryWhereInput, { nullable: true })
  @Type(() => MinistryWhereInput)
  where?: MinistryWhereInput;

  @Field(() => MinistryUpdateWithoutOpportunitiesInput, { nullable: false })
  @Type(() => MinistryUpdateWithoutOpportunitiesInput)
  data!: MinistryUpdateWithoutOpportunitiesInput;
}
