import { Field, InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ElistOfferScalarWhereInput {
  @Field(() => [ElistOfferScalarWhereInput], { nullable: true })
  AND?: Array<ElistOfferScalarWhereInput>;

  @Field(() => [ElistOfferScalarWhereInput], { nullable: true })
  OR?: Array<ElistOfferScalarWhereInput>;

  @Field(() => [ElistOfferScalarWhereInput], { nullable: true })
  NOT?: Array<ElistOfferScalarWhereInput>;

  @Field(() => UuidFilter, { nullable: true })
  id?: UuidFilter;

  @Field(() => UuidFilter, { nullable: true })
  elistId?: UuidFilter;

  @Field(() => BoolFilter, { nullable: true })
  is_accepted?: BoolFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  created_at?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updated_at?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  deleted_at?: DateTimeFilter;

  @Field(() => UuidFilter, { nullable: true })
  opportunityId?: UuidFilter;
}
