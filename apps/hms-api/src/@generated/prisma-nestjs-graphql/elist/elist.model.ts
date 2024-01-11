import { Field, ObjectType, ID, Int } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Competition } from '../competition/competition.model';
import { ElistOffer } from '../elist-offer/elist-offer.model';

@ObjectType()
export class Elist {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  applicant_id!: string;

  @Field(() => String, { nullable: false })
  competition_id!: string;

  @Field(() => Int, { nullable: false })
  rank!: number;

  @Field(() => Date, { nullable: false })
  created_at!: Date;

  @Field(() => Date, { nullable: true })
  updated_at!: Date | null;

  @Field(() => Date, { nullable: true })
  deleted_at!: Date | null;

  @Field(() => User, { nullable: false })
  applicant?: User;

  @Field(() => Competition, { nullable: false })
  competition?: Competition;

  @Field(() => [ElistOffer], { nullable: true })
  offers?: Array<ElistOffer>;
}
