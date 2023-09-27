import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ClassificationListRelationFilter } from '../classification/classification-list-relation-filter.input';

@InputType()
export class OccupationGroupWhereInput {
  @Field(() => [OccupationGroupWhereInput], { nullable: true })
  AND?: Array<OccupationGroupWhereInput>;

  @Field(() => [OccupationGroupWhereInput], { nullable: true })
  OR?: Array<OccupationGroupWhereInput>;

  @Field(() => [OccupationGroupWhereInput], { nullable: true })
  NOT?: Array<OccupationGroupWhereInput>;

  @Field(() => UuidFilter, { nullable: true })
  id?: UuidFilter;

  @Field(() => StringFilter, { nullable: true })
  code?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  name?: StringFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  created_at?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updated_at?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  deleted_at?: DateTimeFilter;

  @Field(() => ClassificationListRelationFilter, { nullable: true })
  @Type(() => ClassificationListRelationFilter)
  classifications?: ClassificationListRelationFilter;
}
