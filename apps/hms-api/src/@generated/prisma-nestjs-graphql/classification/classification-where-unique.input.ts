import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ClassificationWhereInput } from './classification-where.input';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { JobDescriptionListRelationFilter } from '../job-description/job-description-list-relation-filter.input';
import { GridRelationFilter } from '../grid/grid-relation-filter.input';
import { OccupationGroupRelationFilter } from '../occupation-group/occupation-group-relation-filter.input';

@InputType()
export class ClassificationWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => [ClassificationWhereInput], { nullable: true })
  @Type(() => ClassificationWhereInput)
  AND?: Array<ClassificationWhereInput>;

  @Field(() => [ClassificationWhereInput], { nullable: true })
  @Type(() => ClassificationWhereInput)
  OR?: Array<ClassificationWhereInput>;

  @Field(() => [ClassificationWhereInput], { nullable: true })
  @Type(() => ClassificationWhereInput)
  NOT?: Array<ClassificationWhereInput>;

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

  @Field(() => JobDescriptionListRelationFilter, { nullable: true })
  @Type(() => JobDescriptionListRelationFilter)
  job_descriptions?: JobDescriptionListRelationFilter;

  @Field(() => GridRelationFilter, { nullable: true })
  @Type(() => GridRelationFilter)
  grid?: GridRelationFilter;

  @Field(() => OccupationGroupRelationFilter, { nullable: true })
  @Type(() => OccupationGroupRelationFilter)
  occupation_group?: OccupationGroupRelationFilter;
}
