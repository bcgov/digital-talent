import { Field, InputType } from '@nestjs/graphql';
import { ElistWhereInput } from './elist-where.input';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { CompetitionRelationFilter } from '../competition/competition-relation-filter.input';
import { ElistOfferListRelationFilter } from '../elist-offer/elist-offer-list-relation-filter.input';

@InputType()
export class ElistWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => [ElistWhereInput], { nullable: true })
  AND?: Array<ElistWhereInput>;

  @Field(() => [ElistWhereInput], { nullable: true })
  OR?: Array<ElistWhereInput>;

  @Field(() => [ElistWhereInput], { nullable: true })
  NOT?: Array<ElistWhereInput>;

  @Field(() => UuidFilter, { nullable: true })
  applicant_id?: UuidFilter;

  @Field(() => UuidFilter, { nullable: true })
  competition_id?: UuidFilter;

  @Field(() => IntFilter, { nullable: true })
  rank?: IntFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  created_at?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updated_at?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  deleted_at?: DateTimeFilter;

  @Field(() => UserRelationFilter, { nullable: true })
  applicant?: UserRelationFilter;

  @Field(() => CompetitionRelationFilter, { nullable: true })
  competition?: CompetitionRelationFilter;

  @Field(() => ElistOfferListRelationFilter, { nullable: true })
  ElistOffer?: ElistOfferListRelationFilter;
}
