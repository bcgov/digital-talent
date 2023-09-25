import { Field, ObjectType, Float } from '@nestjs/graphql';

@ObjectType()
export class LocationAvgAggregate {
  @Field(() => Float, { nullable: true })
  lat?: number;

  @Field(() => Float, { nullable: true })
  lon?: number;
}
