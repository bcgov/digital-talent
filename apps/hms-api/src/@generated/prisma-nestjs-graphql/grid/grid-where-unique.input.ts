import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { GridWhereInput } from './grid-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { JsonListFilter } from '../prisma/json-list-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ClassificationListRelationFilter } from '../classification/classification-list-relation-filter.input';

@InputType()
export class GridWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => [GridWhereInput], { nullable: true })
  AND?: Array<GridWhereInput>;

  @Field(() => [GridWhereInput], { nullable: true })
  OR?: Array<GridWhereInput>;

  @Field(() => [GridWhereInput], { nullable: true })
  NOT?: Array<GridWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  name?: StringFilter;

  @Field(() => JsonListFilter, { nullable: true })
  steps?: JsonListFilter;

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
