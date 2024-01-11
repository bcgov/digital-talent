import { Field, ObjectType } from '@nestjs/graphql';
import { CommentCountAggregate } from './comment-count-aggregate.output';
import { CommentMinAggregate } from './comment-min-aggregate.output';
import { CommentMaxAggregate } from './comment-max-aggregate.output';

@ObjectType()
export class CommentGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  record_id!: string;

  @Field(() => String, { nullable: false })
  record_type!: string;

  @Field(() => String, { nullable: false })
  user_id!: string;

  @Field(() => String, { nullable: false })
  text!: string;

  @Field(() => Date, { nullable: false })
  created_at!: Date | string;

  @Field(() => Date, { nullable: true })
  updated_at?: Date | string;

  @Field(() => Date, { nullable: true })
  deleted_at?: Date | string;

  @Field(() => CommentCountAggregate, { nullable: true })
  _count?: CommentCountAggregate;

  @Field(() => CommentMinAggregate, { nullable: true })
  _min?: CommentMinAggregate;

  @Field(() => CommentMaxAggregate, { nullable: true })
  _max?: CommentMaxAggregate;
}
