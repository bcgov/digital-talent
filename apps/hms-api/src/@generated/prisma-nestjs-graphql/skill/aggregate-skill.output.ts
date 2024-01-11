import { Field, ObjectType } from '@nestjs/graphql';
import { SkillCountAggregate } from './skill-count-aggregate.output';
import { SkillMinAggregate } from './skill-min-aggregate.output';
import { SkillMaxAggregate } from './skill-max-aggregate.output';

@ObjectType()
export class AggregateSkill {
  @Field(() => SkillCountAggregate, { nullable: true })
  _count?: SkillCountAggregate;

  @Field(() => SkillMinAggregate, { nullable: true })
  _min?: SkillMinAggregate;

  @Field(() => SkillMaxAggregate, { nullable: true })
  _max?: SkillMaxAggregate;
}
