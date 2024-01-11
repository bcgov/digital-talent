import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ApplicationCreateManyInput } from './application-create-many.input';

@ArgsType()
export class CreateManyApplicationArgs {
  @Field(() => [ApplicationCreateManyInput], { nullable: false })
  @Type(() => ApplicationCreateManyInput)
  data!: Array<ApplicationCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
