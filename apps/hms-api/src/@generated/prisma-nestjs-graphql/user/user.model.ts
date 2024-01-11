import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Application } from '../application/application.model';
import { Comment } from '../comment/comment.model';
import { Competition } from '../competition/competition.model';
import { Identity } from '../identity/identity.model';
import { Elist } from '../elist/elist.model';
import { Opportunity } from '../opportunity/opportunity.model';

@ObjectType()
export class User {
  @Field(() => ID, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: true })
  deltek_id!: string | null;

  @Field(() => String, { nullable: true })
  name!: string | null;

  @Field(() => String, { nullable: true })
  email!: string | null;

  @Field(() => [String], { nullable: true })
  roles!: Array<string>;

  @Field(() => Date, { nullable: false })
  created_at!: Date;

  @Field(() => Date, { nullable: true })
  updated_at!: Date | null;

  @Field(() => Date, { nullable: true })
  deleted_at!: Date | null;

  @Field(() => [Application], { nullable: true })
  applications?: Array<Application>;

  @Field(() => [Comment], { nullable: true })
  comments?: Array<Comment>;

  @Field(() => [Competition], { nullable: true })
  competitions?: Array<Competition>;

  @Field(() => [Identity], { nullable: true })
  identities?: Array<Identity>;

  @Field(() => [Elist], { nullable: true })
  elist?: Array<Elist>;

  @Field(() => [Opportunity], { nullable: true })
  opportunities?: Array<Opportunity>;
}
