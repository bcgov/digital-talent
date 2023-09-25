import { Field, InputType } from '@nestjs/graphql';
import { OpportunitySkillOpportunity_idSkill_idCompoundUniqueInput } from './opportunity-skill-opportunity-id-skill-id-compound-unique.input';
import { OpportunitySkillWhereInput } from './opportunity-skill-where.input';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { SkillRelationFilter } from '../skill/skill-relation-filter.input';
import { OpportunityRelationFilter } from '../opportunity/opportunity-relation-filter.input';

@InputType()
export class OpportunitySkillWhereUniqueInput {
  @Field(() => OpportunitySkillOpportunity_idSkill_idCompoundUniqueInput, { nullable: true })
  opportunity_id_skill_id?: OpportunitySkillOpportunity_idSkill_idCompoundUniqueInput;

  @Field(() => [OpportunitySkillWhereInput], { nullable: true })
  AND?: Array<OpportunitySkillWhereInput>;

  @Field(() => [OpportunitySkillWhereInput], { nullable: true })
  OR?: Array<OpportunitySkillWhereInput>;

  @Field(() => [OpportunitySkillWhereInput], { nullable: true })
  NOT?: Array<OpportunitySkillWhereInput>;

  @Field(() => UuidFilter, { nullable: true })
  opportunity_id?: UuidFilter;

  @Field(() => UuidFilter, { nullable: true })
  skill_id?: UuidFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  created_at?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  deleted_at?: DateTimeFilter;

  @Field(() => UuidFilter, { nullable: true })
  opportunityId?: UuidFilter;

  @Field(() => SkillRelationFilter, { nullable: true })
  skill?: SkillRelationFilter;

  @Field(() => OpportunityRelationFilter, { nullable: true })
  Opportunity?: OpportunityRelationFilter;
}
