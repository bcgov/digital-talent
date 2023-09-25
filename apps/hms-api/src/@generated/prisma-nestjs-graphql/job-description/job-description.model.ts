import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Classification } from '../classification/classification.model';
import { Competition } from '../competition/competition.model';

@ObjectType()
export class JobDescription {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  classification_id!: string;

  @Field(() => String, { nullable: true })
  e_class_id!: string | null;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => Date, { nullable: false })
  created_at!: Date;

  @Field(() => Date, { nullable: true })
  updated_at!: Date | null;

  @Field(() => Date, { nullable: true })
  deleted_at!: Date | null;

  @Field(() => Classification, { nullable: false })
  classification?: Classification;

  @Field(() => [Competition], { nullable: true })
  Competition?: Array<Competition>;
}
