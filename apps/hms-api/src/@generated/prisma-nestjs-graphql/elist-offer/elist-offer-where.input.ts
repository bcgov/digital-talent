import { Field, InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ElistRelationFilter } from '../elist/elist-relation-filter.input';
import { OpportunityRelationFilter } from '../opportunity/opportunity-relation-filter.input';

@InputType()
export class ElistOfferWhereInput {
  @Field(() => [ElistOfferWhereInput], { nullable: true })
  AND?: Array<ElistOfferWhereInput>;

  @Field(() => [ElistOfferWhereInput], { nullable: true })
  OR?: Array<ElistOfferWhereInput>;

  @Field(() => [ElistOfferWhereInput], { nullable: true })
  NOT?: Array<ElistOfferWhereInput>;

  @Field(() => UuidFilter, { nullable: true })
  id?: UuidFilter;

  @Field(() => UuidFilter, { nullable: true })
  elist_id?: UuidFilter;

  @Field(() => UuidFilter, { nullable: true })
  opportunity_id?: UuidFilter;

  @Field(() => BoolFilter, { nullable: true })
  is_accepted?: BoolFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  created_at?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updated_at?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  deleted_at?: DateTimeFilter;

  @Field(() => ElistRelationFilter, { nullable: true })
  elist?: ElistRelationFilter;

  @Field(() => OpportunityRelationFilter, { nullable: true })
  opportunity?: OpportunityRelationFilter;
}
