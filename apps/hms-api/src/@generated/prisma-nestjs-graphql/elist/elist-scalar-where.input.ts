import { Field, InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ElistScalarWhereInput {
  @Field(() => [ElistScalarWhereInput], { nullable: true })
  AND?: Array<ElistScalarWhereInput>;

  @Field(() => [ElistScalarWhereInput], { nullable: true })
  OR?: Array<ElistScalarWhereInput>;

  @Field(() => [ElistScalarWhereInput], { nullable: true })
  NOT?: Array<ElistScalarWhereInput>;

  @Field(() => UuidFilter, { nullable: true })
  id?: UuidFilter;

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
}
