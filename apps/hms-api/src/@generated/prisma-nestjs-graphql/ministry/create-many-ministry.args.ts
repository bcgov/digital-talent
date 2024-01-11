import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { MinistryCreateManyInput } from './ministry-create-many.input';

@ArgsType()
export class CreateManyMinistryArgs {
  @Field(() => [MinistryCreateManyInput], { nullable: false })
  @Type(() => MinistryCreateManyInput)
  data!: Array<MinistryCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
