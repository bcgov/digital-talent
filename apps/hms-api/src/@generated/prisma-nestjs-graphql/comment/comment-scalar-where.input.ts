import { Field, InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class CommentScalarWhereInput {
  @Field(() => [CommentScalarWhereInput], { nullable: true })
  AND?: Array<CommentScalarWhereInput>;

  @Field(() => [CommentScalarWhereInput], { nullable: true })
  OR?: Array<CommentScalarWhereInput>;

  @Field(() => [CommentScalarWhereInput], { nullable: true })
  NOT?: Array<CommentScalarWhereInput>;

  @Field(() => UuidFilter, { nullable: true })
  id?: UuidFilter;

  @Field(() => StringFilter, { nullable: true })
  record_id?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  record_type?: StringFilter;

  @Field(() => UuidFilter, { nullable: true })
  user_id?: UuidFilter;

  @Field(() => StringFilter, { nullable: true })
  text?: StringFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  created_at?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updated_at?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  deleted_at?: DateTimeFilter;
}
