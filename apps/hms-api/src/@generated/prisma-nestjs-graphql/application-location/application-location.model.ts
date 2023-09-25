import { Field, ObjectType, Int } from '@nestjs/graphql';
import { Application } from '../application/application.model';
import { Location } from '../location/location.model';

@ObjectType()
export class ApplicationLocation {
  @Field(() => String, { nullable: false })
  application_id!: string;

  @Field(() => String, { nullable: false })
  location_id!: string;

  @Field(() => Int, { nullable: false })
  rank!: number;

  @Field(() => Date, { nullable: false })
  created_at!: Date;

  @Field(() => Date, { nullable: true })
  updated_at!: Date | null;

  @Field(() => Date, { nullable: true })
  deleted_at!: Date | null;

  @Field(() => Application, { nullable: false })
  application?: Application;

  @Field(() => Location, { nullable: false })
  location?: Location;
}
