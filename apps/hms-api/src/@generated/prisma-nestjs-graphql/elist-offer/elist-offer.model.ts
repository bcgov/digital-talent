import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Elist } from '../elist/elist.model';
import { Opportunity } from '../opportunity/opportunity.model';

@ObjectType()
export class ElistOffer {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  elist_id!: string;

  @Field(() => String, { nullable: false })
  opportunity_id!: string;

  @Field(() => Boolean, { nullable: false })
  is_accepted!: boolean;

  @Field(() => Date, { nullable: false })
  created_at!: Date;

  @Field(() => Date, { nullable: true })
  updated_at!: Date | null;

  @Field(() => Date, { nullable: true })
  deleted_at!: Date | null;

  @Field(() => Elist, { nullable: false })
  elist?: Elist;

  @Field(() => Opportunity, { nullable: true })
  opportunity?: Opportunity | null;
}
