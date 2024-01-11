import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { CommentCreateManyUserInput } from './comment-create-many-user.input';

@InputType()
export class CommentCreateManyUserInputEnvelope {
  @Field(() => [CommentCreateManyUserInput], { nullable: false })
  @Type(() => CommentCreateManyUserInput)
  data!: Array<CommentCreateManyUserInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
