import { Field, InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ApplicationLocationScalarWhereInput {
  @Field(() => [ApplicationLocationScalarWhereInput], { nullable: true })
  AND?: Array<ApplicationLocationScalarWhereInput>;

  @Field(() => [ApplicationLocationScalarWhereInput], { nullable: true })
  OR?: Array<ApplicationLocationScalarWhereInput>;

  @Field(() => [ApplicationLocationScalarWhereInput], { nullable: true })
  NOT?: Array<ApplicationLocationScalarWhereInput>;

  @Field(() => UuidFilter, { nullable: true })
  application_id?: UuidFilter;

  @Field(() => UuidFilter, { nullable: true })
  location_id?: UuidFilter;

  @Field(() => IntFilter, { nullable: true })
  rank?: IntFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  created_at?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updated_at?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  deleted_at?: DateTimeFilter;
}
