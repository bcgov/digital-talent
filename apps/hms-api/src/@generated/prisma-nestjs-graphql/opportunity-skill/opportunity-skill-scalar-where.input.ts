import { Field, InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class OpportunitySkillScalarWhereInput {
  @Field(() => [OpportunitySkillScalarWhereInput], { nullable: true })
  AND?: Array<OpportunitySkillScalarWhereInput>;

  @Field(() => [OpportunitySkillScalarWhereInput], { nullable: true })
  OR?: Array<OpportunitySkillScalarWhereInput>;

  @Field(() => [OpportunitySkillScalarWhereInput], { nullable: true })
  NOT?: Array<OpportunitySkillScalarWhereInput>;

  @Field(() => UuidFilter, { nullable: true })
  opportunity_id?: UuidFilter;

  @Field(() => UuidFilter, { nullable: true })
  skill_id?: UuidFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  created_at?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  deleted_at?: DateTimeFilter;
}
