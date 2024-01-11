import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { OccupationGroupCreateInput } from './occupation-group-create.input';

@ArgsType()
export class CreateOneOccupationGroupArgs {
  @Field(() => OccupationGroupCreateInput, { nullable: false })
  @Type(() => OccupationGroupCreateInput)
  data!: OccupationGroupCreateInput;
}
