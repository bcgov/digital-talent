import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ApplicationLocationCreateManyInput } from './application-location-create-many.input';

@ArgsType()
export class CreateManyApplicationLocationArgs {
  @Field(() => [ApplicationLocationCreateManyInput], { nullable: false })
  @Type(() => ApplicationLocationCreateManyInput)
  data!: Array<ApplicationLocationCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
