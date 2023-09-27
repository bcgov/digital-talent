import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { GridCreateManyInput } from './grid-create-many.input';

@ArgsType()
export class CreateManyGridArgs {
  @Field(() => [GridCreateManyInput], { nullable: false })
  @Type(() => GridCreateManyInput)
  data!: Array<GridCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
