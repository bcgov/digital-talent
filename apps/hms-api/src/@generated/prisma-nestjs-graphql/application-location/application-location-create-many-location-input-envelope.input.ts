import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ApplicationLocationCreateManyLocationInput } from './application-location-create-many-location.input';

@InputType()
export class ApplicationLocationCreateManyLocationInputEnvelope {
  @Field(() => [ApplicationLocationCreateManyLocationInput], { nullable: false })
  @Type(() => ApplicationLocationCreateManyLocationInput)
  data!: Array<ApplicationLocationCreateManyLocationInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
