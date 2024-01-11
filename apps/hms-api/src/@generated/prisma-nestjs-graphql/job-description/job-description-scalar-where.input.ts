import { Field, InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class JobDescriptionScalarWhereInput {
  @Field(() => [JobDescriptionScalarWhereInput], { nullable: true })
  AND?: Array<JobDescriptionScalarWhereInput>;

  @Field(() => [JobDescriptionScalarWhereInput], { nullable: true })
  OR?: Array<JobDescriptionScalarWhereInput>;

  @Field(() => [JobDescriptionScalarWhereInput], { nullable: true })
  NOT?: Array<JobDescriptionScalarWhereInput>;

  @Field(() => UuidFilter, { nullable: true })
  id?: UuidFilter;

  @Field(() => UuidFilter, { nullable: true })
  classification_id?: UuidFilter;

  @Field(() => StringFilter, { nullable: true })
  e_class_id?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  name?: StringFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  created_at?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updated_at?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  deleted_at?: DateTimeFilter;
}
