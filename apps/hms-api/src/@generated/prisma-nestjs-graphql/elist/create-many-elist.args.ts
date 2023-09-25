import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ElistCreateManyInput } from './elist-create-many.input';

@ArgsType()
export class CreateManyElistArgs {
  @Field(() => [ElistCreateManyInput], { nullable: false })
  @Type(() => ElistCreateManyInput)
  data!: Array<ElistCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
