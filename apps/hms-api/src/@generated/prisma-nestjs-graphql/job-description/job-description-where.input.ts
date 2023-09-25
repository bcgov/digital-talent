import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ClassificationRelationFilter } from '../classification/classification-relation-filter.input';
import { CompetitionListRelationFilter } from '../competition/competition-list-relation-filter.input';

@InputType()
export class JobDescriptionWhereInput {
  @Field(() => [JobDescriptionWhereInput], { nullable: true })
  AND?: Array<JobDescriptionWhereInput>;

  @Field(() => [JobDescriptionWhereInput], { nullable: true })
  OR?: Array<JobDescriptionWhereInput>;

  @Field(() => [JobDescriptionWhereInput], { nullable: true })
  NOT?: Array<JobDescriptionWhereInput>;

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

  @Field(() => ClassificationRelationFilter, { nullable: true })
  @Type(() => ClassificationRelationFilter)
  classification?: ClassificationRelationFilter;

  @Field(() => CompetitionListRelationFilter, { nullable: true })
  Competition?: CompetitionListRelationFilter;
}
