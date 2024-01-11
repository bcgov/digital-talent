import { Field, InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class JobDescriptionScalarWhereWithAggregatesInput {
  @Field(() => [JobDescriptionScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<JobDescriptionScalarWhereWithAggregatesInput>;

  @Field(() => [JobDescriptionScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<JobDescriptionScalarWhereWithAggregatesInput>;

  @Field(() => [JobDescriptionScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<JobDescriptionScalarWhereWithAggregatesInput>;

  @Field(() => UuidWithAggregatesFilter, { nullable: true })
  id?: UuidWithAggregatesFilter;

  @Field(() => UuidWithAggregatesFilter, { nullable: true })
  classification_id?: UuidWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  e_class_id?: StringWithAggregatesFilter;

  @Field(() => StringWithAggregatesFilter, { nullable: true })
  name?: StringWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  created_at?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updated_at?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  deleted_at?: DateTimeWithAggregatesFilter;
}
