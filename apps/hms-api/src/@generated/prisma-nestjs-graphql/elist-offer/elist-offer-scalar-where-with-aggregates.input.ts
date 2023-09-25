import { Field, InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class ElistOfferScalarWhereWithAggregatesInput {
  @Field(() => [ElistOfferScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<ElistOfferScalarWhereWithAggregatesInput>;

  @Field(() => [ElistOfferScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<ElistOfferScalarWhereWithAggregatesInput>;

  @Field(() => [ElistOfferScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<ElistOfferScalarWhereWithAggregatesInput>;

  @Field(() => UuidWithAggregatesFilter, { nullable: true })
  id?: UuidWithAggregatesFilter;

  @Field(() => UuidWithAggregatesFilter, { nullable: true })
  elistId?: UuidWithAggregatesFilter;

  @Field(() => BoolWithAggregatesFilter, { nullable: true })
  is_accepted?: BoolWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  created_at?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updated_at?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  deleted_at?: DateTimeWithAggregatesFilter;

  @Field(() => UuidWithAggregatesFilter, { nullable: true })
  opportunityId?: UuidWithAggregatesFilter;
}
