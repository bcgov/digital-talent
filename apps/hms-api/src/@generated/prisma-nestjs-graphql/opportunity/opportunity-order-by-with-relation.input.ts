import { Field, InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { OpportunitySkillOrderByRelationAggregateInput } from '../opportunity-skill/opportunity-skill-order-by-relation-aggregate.input';
import { OpportunityLocationOrderByRelationAggregateInput } from '../opportunity-location/opportunity-location-order-by-relation-aggregate.input';
import { CompetitionOrderByWithRelationInput } from '../competition/competition-order-by-with-relation.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { MinistryOrderByWithRelationInput } from '../ministry/ministry-order-by-with-relation.input';
import { ElistOfferOrderByRelationAggregateInput } from '../elist-offer/elist-offer-order-by-relation-aggregate.input';

@InputType()
export class OpportunityOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  competition_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  deltek_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  hiring_manager_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  ministry_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  state?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  involvement?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  work_option?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  description?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  candidate_description?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  team_name?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  team_description?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  work_examples?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  created_at?: keyof typeof SortOrder;

  @Field(() => SortOrderInput, { nullable: true })
  updated_at?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  deleted_at?: SortOrderInput;

  @Field(() => OpportunitySkillOrderByRelationAggregateInput, { nullable: true })
  skills?: OpportunitySkillOrderByRelationAggregateInput;

  @Field(() => OpportunityLocationOrderByRelationAggregateInput, { nullable: true })
  locations?: OpportunityLocationOrderByRelationAggregateInput;

  @Field(() => CompetitionOrderByWithRelationInput, { nullable: true })
  competition?: CompetitionOrderByWithRelationInput;

  @Field(() => UserOrderByWithRelationInput, { nullable: true })
  hiring_manager?: UserOrderByWithRelationInput;

  @Field(() => MinistryOrderByWithRelationInput, { nullable: true })
  ministry?: MinistryOrderByWithRelationInput;

  @Field(() => ElistOfferOrderByRelationAggregateInput, { nullable: true })
  offers?: ElistOfferOrderByRelationAggregateInput;
}
