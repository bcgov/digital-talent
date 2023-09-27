import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { OpportunitySkillCreateManySkillInput } from './opportunity-skill-create-many-skill.input';

@InputType()
export class OpportunitySkillCreateManySkillInputEnvelope {
  @Field(() => [OpportunitySkillCreateManySkillInput], { nullable: false })
  @Type(() => OpportunitySkillCreateManySkillInput)
  data!: Array<OpportunitySkillCreateManySkillInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
