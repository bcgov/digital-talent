import { Field, InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ApplicationOrderByRelationAggregateInput } from '../application/application-order-by-relation-aggregate.input';
import { CommentOrderByRelationAggregateInput } from '../comment/comment-order-by-relation-aggregate.input';
import { CompetitionOrderByRelationAggregateInput } from '../competition/competition-order-by-relation-aggregate.input';
import { IdentityOrderByRelationAggregateInput } from '../identity/identity-order-by-relation-aggregate.input';
import { ElistOrderByRelationAggregateInput } from '../elist/elist-order-by-relation-aggregate.input';
import { OpportunityOrderByRelationAggregateInput } from '../opportunity/opportunity-order-by-relation-aggregate.input';

@InputType()
export class UserOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrderInput, { nullable: true })
  deltek_id?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  name?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  email?: SortOrderInput;

  @Field(() => SortOrder, { nullable: true })
  roles?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  created_at?: keyof typeof SortOrder;

  @Field(() => SortOrderInput, { nullable: true })
  updated_at?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  deleted_at?: SortOrderInput;

  @Field(() => ApplicationOrderByRelationAggregateInput, { nullable: true })
  applications?: ApplicationOrderByRelationAggregateInput;

  @Field(() => CommentOrderByRelationAggregateInput, { nullable: true })
  comments?: CommentOrderByRelationAggregateInput;

  @Field(() => CompetitionOrderByRelationAggregateInput, { nullable: true })
  competitions?: CompetitionOrderByRelationAggregateInput;

  @Field(() => IdentityOrderByRelationAggregateInput, { nullable: true })
  identities?: IdentityOrderByRelationAggregateInput;

  @Field(() => ElistOrderByRelationAggregateInput, { nullable: true })
  elist?: ElistOrderByRelationAggregateInput;

  @Field(() => OpportunityOrderByRelationAggregateInput, { nullable: true })
  opportunities?: OpportunityOrderByRelationAggregateInput;
}
