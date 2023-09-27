import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ClassificationScalarWhereInput {
  @Field(() => [ClassificationScalarWhereInput], { nullable: true })
  @Type(() => ClassificationScalarWhereInput)
  AND?: Array<ClassificationScalarWhereInput>;

  @Field(() => [ClassificationScalarWhereInput], { nullable: true })
  @Type(() => ClassificationScalarWhereInput)
  OR?: Array<ClassificationScalarWhereInput>;

  @Field(() => [ClassificationScalarWhereInput], { nullable: true })
  @Type(() => ClassificationScalarWhereInput)
  NOT?: Array<ClassificationScalarWhereInput>;

  @Field(() => UuidFilter, { nullable: true })
  id?: UuidFilter;

  @Field(() => UuidFilter, { nullable: true })
  grid_id?: UuidFilter;

  @Field(() => UuidFilter, { nullable: true })
  occupation_group_id?: UuidFilter;

  @Field(() => DecimalFilter, { nullable: true })
  @Type(() => DecimalFilter)
  rate_adjustment?: DecimalFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  created_at?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updated_at?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  deleted_at?: DateTimeFilter;
}
