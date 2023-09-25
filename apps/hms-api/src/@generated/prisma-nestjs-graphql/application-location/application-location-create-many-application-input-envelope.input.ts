import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ApplicationLocationCreateManyApplicationInput } from './application-location-create-many-application.input';

@InputType()
export class ApplicationLocationCreateManyApplicationInputEnvelope {
  @Field(() => [ApplicationLocationCreateManyApplicationInput], { nullable: false })
  @Type(() => ApplicationLocationCreateManyApplicationInput)
  data!: Array<ApplicationLocationCreateManyApplicationInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
