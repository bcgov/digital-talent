import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { OpportunitySkillCreateManyInput } from './opportunity-skill-create-many.input';

@ArgsType()
export class CreateManyOpportunitySkillArgs {
  @Field(() => [OpportunitySkillCreateManyInput], { nullable: false })
  @Type(() => OpportunitySkillCreateManyInput)
  data!: Array<OpportunitySkillCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
