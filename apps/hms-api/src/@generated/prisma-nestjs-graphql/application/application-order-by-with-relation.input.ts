import { Field, InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ApplicationLocationOrderByRelationAggregateInput } from '../application-location/application-location-order-by-relation-aggregate.input';
import { ApplicationSkillOrderByRelationAggregateInput } from '../application-skill/application-skill-order-by-relation-aggregate.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';

@InputType()
export class ApplicationOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  applicant_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  created_at?: keyof typeof SortOrder;

  @Field(() => SortOrderInput, { nullable: true })
  updated_at?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  deleted_at?: SortOrderInput;

  @Field(() => SortOrder, { nullable: true })
  json?: keyof typeof SortOrder;

  @Field(() => ApplicationLocationOrderByRelationAggregateInput, { nullable: true })
  locations?: ApplicationLocationOrderByRelationAggregateInput;

  @Field(() => ApplicationSkillOrderByRelationAggregateInput, { nullable: true })
  skills?: ApplicationSkillOrderByRelationAggregateInput;

  @Field(() => UserOrderByWithRelationInput, { nullable: true })
  applicant?: UserOrderByWithRelationInput;
}
