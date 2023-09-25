import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { DecimalWithAggregatesFilter } from '../prisma/decimal-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class ClassificationScalarWhereWithAggregatesInput {
  @Field(() => [ClassificationScalarWhereWithAggregatesInput], { nullable: true })
  @Type(() => ClassificationScalarWhereWithAggregatesInput)
  AND?: Array<ClassificationScalarWhereWithAggregatesInput>;

  @Field(() => [ClassificationScalarWhereWithAggregatesInput], { nullable: true })
  @Type(() => ClassificationScalarWhereWithAggregatesInput)
  OR?: Array<ClassificationScalarWhereWithAggregatesInput>;

  @Field(() => [ClassificationScalarWhereWithAggregatesInput], { nullable: true })
  @Type(() => ClassificationScalarWhereWithAggregatesInput)
  NOT?: Array<ClassificationScalarWhereWithAggregatesInput>;

  @Field(() => UuidWithAggregatesFilter, { nullable: true })
  id?: UuidWithAggregatesFilter;

  @Field(() => UuidWithAggregatesFilter, { nullable: true })
  grid_id?: UuidWithAggregatesFilter;

  @Field(() => UuidWithAggregatesFilter, { nullable: true })
  occupation_group_id?: UuidWithAggregatesFilter;

  @Field(() => DecimalWithAggregatesFilter, { nullable: true })
  @Type(() => DecimalWithAggregatesFilter)
  rate_adjustment?: DecimalWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  created_at?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updated_at?: DateTimeWithAggregatesFilter;

  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  deleted_at?: DateTimeWithAggregatesFilter;
}
