import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { OpportunityOrderByRelationAggregateInput } from '../opportunity/opportunity-order-by-relation-aggregate.input';
import { ElistOrderByRelationAggregateInput } from '../elist/elist-order-by-relation-aggregate.input';
import { CompetitionSkillOrderByRelationAggregateInput } from '../competition-skill/competition-skill-order-by-relation-aggregate.input';
import { JobDescriptionOrderByWithRelationInput } from '../job-description/job-description-order-by-with-relation.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { CompetitionScheduleOrderByWithRelationInput } from '../competition-schedule/competition-schedule-order-by-with-relation.input';

@InputType()
export class CompetitionOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrderInput, { nullable: true })
  deltek_id?: SortOrderInput;

  @Field(() => SortOrder, { nullable: true })
  job_description_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  recruiter_id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  category?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  state?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  metadata?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  created_at?: keyof typeof SortOrder;

  @Field(() => SortOrderInput, { nullable: true })
  updated_at?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  deleted_at?: SortOrderInput;

  @Field(() => OpportunityOrderByRelationAggregateInput, { nullable: true })
  opportunities?: OpportunityOrderByRelationAggregateInput;

  @Field(() => ElistOrderByRelationAggregateInput, { nullable: true })
  elist?: ElistOrderByRelationAggregateInput;

  @Field(() => CompetitionSkillOrderByRelationAggregateInput, { nullable: true })
  skills?: CompetitionSkillOrderByRelationAggregateInput;

  @Field(() => JobDescriptionOrderByWithRelationInput, { nullable: true })
  @Type(() => JobDescriptionOrderByWithRelationInput)
  job_description?: JobDescriptionOrderByWithRelationInput;

  @Field(() => UserOrderByWithRelationInput, { nullable: true })
  recruiter?: UserOrderByWithRelationInput;

  @Field(() => CompetitionScheduleOrderByWithRelationInput, { nullable: true })
  schedule?: CompetitionScheduleOrderByWithRelationInput;
}
