import { Field, InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';
import { ApplicationLocationListRelationFilter } from '../application-location/application-location-list-relation-filter.input';
import { ApplicationSkillListRelationFilter } from '../application-skill/application-skill-list-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class ApplicationWhereInput {
  @Field(() => [ApplicationWhereInput], { nullable: true })
  AND?: Array<ApplicationWhereInput>;

  @Field(() => [ApplicationWhereInput], { nullable: true })
  OR?: Array<ApplicationWhereInput>;

  @Field(() => [ApplicationWhereInput], { nullable: true })
  NOT?: Array<ApplicationWhereInput>;

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

  @Field(() => ApplicationLocationListRelationFilter, { nullable: true })
  locations?: ApplicationLocationListRelationFilter;

  @Field(() => ApplicationSkillListRelationFilter, { nullable: true })
  skills?: ApplicationSkillListRelationFilter;

  @Field(() => UserRelationFilter, { nullable: true })
  applicant?: UserRelationFilter;
}
