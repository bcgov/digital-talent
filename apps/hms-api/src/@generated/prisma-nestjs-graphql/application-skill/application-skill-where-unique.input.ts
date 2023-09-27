import { Field, InputType } from '@nestjs/graphql';
import { ApplicationSkillApplication_idSkill_idCompoundUniqueInput } from './application-skill-application-id-skill-id-compound-unique.input';
import { ApplicationSkillWhereInput } from './application-skill-where.input';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ApplicationRelationFilter } from '../application/application-relation-filter.input';
import { SkillRelationFilter } from '../skill/skill-relation-filter.input';

@InputType()
export class ApplicationSkillWhereUniqueInput {
  @Field(() => ApplicationSkillApplication_idSkill_idCompoundUniqueInput, { nullable: true })
  application_id_skill_id?: ApplicationSkillApplication_idSkill_idCompoundUniqueInput;

  @Field(() => [ApplicationSkillWhereInput], { nullable: true })
  AND?: Array<ApplicationSkillWhereInput>;

  @Field(() => [ApplicationSkillWhereInput], { nullable: true })
  OR?: Array<ApplicationSkillWhereInput>;

  @Field(() => [ApplicationSkillWhereInput], { nullable: true })
  NOT?: Array<ApplicationSkillWhereInput>;

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

  @Field(() => ApplicationRelationFilter, { nullable: true })
  application?: ApplicationRelationFilter;

  @Field(() => SkillRelationFilter, { nullable: true })
  skill?: SkillRelationFilter;
}
