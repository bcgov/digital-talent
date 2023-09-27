import { Field, InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class CommentScalarWhereWithAggregatesInput {
  @Field(() => [CommentScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<CommentScalarWhereWithAggregatesInput>;

  @Field(() => [CommentScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<CommentScalarWhereWithAggregatesInput>;

  @Field(() => [CommentScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<CommentScalarWhereWithAggregatesInput>;

  @Field(() => UuidWithAggregatesFilter, { nullable: true })
  id?: UuidWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  record_id?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  record_type?: StringWithAggregatesFilter;

  @Field(() => UuidWithAggregatesFilter, { nullable: true })
  user_id?: UuidWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  text?: StringWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  created_at?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updated_at?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  deleted_at?: DateTimeWithAggregatesFilter;
}
