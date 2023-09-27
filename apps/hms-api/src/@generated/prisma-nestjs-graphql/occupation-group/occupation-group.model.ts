import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Classification } from '../classification/classification.model';

@ObjectType()
export class OccupationGroup {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  code!: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => Date, { nullable: false })
  created_at!: Date;

  @Field(() => Date, { nullable: true })
  updated_at!: Date | null;

  @Field(() => Date, { nullable: true })
  deleted_at!: Date | null;

  @Field(() => [Classification], { nullable: true })
  classifications?: Array<Classification>;
}
