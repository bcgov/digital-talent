import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Opportunity } from '../opportunity/opportunity.model';

@ObjectType()
export class Ministry {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  deltek_id!: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => Date, { nullable: false })
  created_at!: Date;

  @Field(() => Date, { nullable: true })
  updated_at!: Date | null;

  @Field(() => Date, { nullable: true })
  deleted_at!: Date | null;

  @Field(() => [Opportunity], { nullable: true })
  opportunities?: Array<Opportunity>;
}
