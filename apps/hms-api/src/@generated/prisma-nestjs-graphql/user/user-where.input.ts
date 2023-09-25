import { Field, InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringListFilter } from '../prisma/string-list-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ApplicationListRelationFilter } from '../application/application-list-relation-filter.input';
import { CompetitionListRelationFilter } from '../competition/competition-list-relation-filter.input';
import { IdentityListRelationFilter } from '../identity/identity-list-relation-filter.input';
import { ElistListRelationFilter } from '../elist/elist-list-relation-filter.input';
import { CommentListRelationFilter } from '../comment/comment-list-relation-filter.input';
import { OpportunityListRelationFilter } from '../opportunity/opportunity-list-relation-filter.input';

@InputType()
export class UserWhereInput {
  @Field(() => [UserWhereInput], { nullable: true })
  AND?: Array<UserWhereInput>;

  @Field(() => [UserWhereInput], { nullable: true })
  OR?: Array<UserWhereInput>;

  @Field(() => [UserWhereInput], { nullable: true })
  NOT?: Array<UserWhereInput>;

  @Field(() => UuidFilter, { nullable: true })
  id?: UuidFilter;

  @Field(() => StringFilter, { nullable: true })
  deltek_id?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  name?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  email?: StringFilter;

  @Field(() => StringListFilter, { nullable: true })
  roles?: StringListFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  created_at?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updated_at?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  deleted_at?: DateTimeFilter;

  @Field(() => ApplicationListRelationFilter, { nullable: true })
  applications?: ApplicationListRelationFilter;

  @Field(() => CompetitionListRelationFilter, { nullable: true })
  competitions?: CompetitionListRelationFilter;

  @Field(() => IdentityListRelationFilter, { nullable: true })
  identities?: IdentityListRelationFilter;

  @Field(() => ElistListRelationFilter, { nullable: true })
  elist?: ElistListRelationFilter;

  @Field(() => CommentListRelationFilter, { nullable: true })
  Comment?: CommentListRelationFilter;

  @Field(() => OpportunityListRelationFilter, { nullable: true })
  Opportunity?: OpportunityListRelationFilter;
}
