import { Field, InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ApplicationSkillOrderByRelationAggregateInput } from '../application-skill/application-skill-order-by-relation-aggregate.input';
import { CompetitionSkillOrderByRelationAggregateInput } from '../competition-skill/competition-skill-order-by-relation-aggregate.input';
import { OpportunitySkillOrderByRelationAggregateInput } from '../opportunity-skill/opportunity-skill-order-by-relation-aggregate.input';

@InputType()
export class SkillOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  category?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;

  @Field(() => SortOrderInput, { nullable: true })
  description?: SortOrderInput;

  @Field(() => SortOrder, { nullable: true })
  created_at?: keyof typeof SortOrder;

  @Field(() => SortOrderInput, { nullable: true })
  updated_at?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  deleted_at?: SortOrderInput;

  @Field(() => ApplicationSkillOrderByRelationAggregateInput, { nullable: true })
  applications?: ApplicationSkillOrderByRelationAggregateInput;

  @Field(() => CompetitionSkillOrderByRelationAggregateInput, { nullable: true })
  competitions?: CompetitionSkillOrderByRelationAggregateInput;

  @Field(() => OpportunitySkillOrderByRelationAggregateInput, { nullable: true })
  opportunities?: OpportunitySkillOrderByRelationAggregateInput;
}
