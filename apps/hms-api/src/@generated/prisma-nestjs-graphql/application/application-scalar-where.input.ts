import { Field, InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';

@InputType()
export class ApplicationScalarWhereInput {
  @Field(() => [ApplicationScalarWhereInput], { nullable: true })
  AND?: Array<ApplicationScalarWhereInput>;

  @Field(() => [ApplicationScalarWhereInput], { nullable: true })
  OR?: Array<ApplicationScalarWhereInput>;

  @Field(() => [ApplicationScalarWhereInput], { nullable: true })
  NOT?: Array<ApplicationScalarWhereInput>;

  @Field(() => UuidFilter, { nullable: true })
  id?: UuidFilter;

  @Field(() => UuidFilter, { nullable: true })
  applicant_id?: UuidFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  created_at?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updated_at?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  deleted_at?: DateTimeFilter;

  @Field(() => JsonFilter, { nullable: true })
  json?: JsonFilter;
}
