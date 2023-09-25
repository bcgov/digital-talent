import { Field, ObjectType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/library';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class ClassificationAvgAggregate {
  @Field(() => GraphQLDecimal, { nullable: true })
  rate_adjustment?: Decimal;
}
