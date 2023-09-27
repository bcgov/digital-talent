import { Field, InputType } from '@nestjs/graphql';
import { MinistryWhereInput } from './ministry-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { OpportunityListRelationFilter } from '../opportunity/opportunity-list-relation-filter.input';

@InputType()
export class MinistryWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => [MinistryWhereInput], { nullable: true })
  AND?: Array<MinistryWhereInput>;

  @Field(() => [MinistryWhereInput], { nullable: true })
  OR?: Array<MinistryWhereInput>;

  @Field(() => [MinistryWhereInput], { nullable: true })
  NOT?: Array<MinistryWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  deltek_id?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  name?: StringFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  created_at?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updated_at?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  deleted_at?: DateTimeFilter;

  @Field(() => OpportunityListRelationFilter, { nullable: true })
  opportunities?: OpportunityListRelationFilter;
}
