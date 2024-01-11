import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { OccupationGroupCreateManyInput } from './occupation-group-create-many.input';

@ArgsType()
export class CreateManyOccupationGroupArgs {
  @Field(() => [OccupationGroupCreateManyInput], { nullable: false })
  @Type(() => OccupationGroupCreateManyInput)
  data!: Array<OccupationGroupCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
