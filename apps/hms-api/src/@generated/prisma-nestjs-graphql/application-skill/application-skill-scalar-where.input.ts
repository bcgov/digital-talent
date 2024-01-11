import { Field, InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ApplicationSkillScalarWhereInput {
  @Field(() => [ApplicationSkillScalarWhereInput], { nullable: true })
  AND?: Array<ApplicationSkillScalarWhereInput>;

  @Field(() => [ApplicationSkillScalarWhereInput], { nullable: true })
  OR?: Array<ApplicationSkillScalarWhereInput>;

  @Field(() => [ApplicationSkillScalarWhereInput], { nullable: true })
  NOT?: Array<ApplicationSkillScalarWhereInput>;

  @Field(() => UuidFilter, { nullable: true })
  application_id?: UuidFilter;

  @Field(() => UuidFilter, { nullable: true })
  skill_id?: UuidFilter;

  @Field(() => IntFilter, { nullable: true })
  years_experience?: IntFilter;

  @Field(() => StringFilter, { nullable: true })
  description?: StringFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  created_at?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  updated_at?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  deleted_at?: DateTimeFilter;
}
