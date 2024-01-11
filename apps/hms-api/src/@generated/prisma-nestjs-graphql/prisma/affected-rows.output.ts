import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class AffectedRows {
  @Field(() => Int, { nullable: false })
  count!: number;
}
