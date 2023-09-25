import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { OccupationGroupUpdateManyMutationInput } from './occupation-group-update-many-mutation.input';
import { OccupationGroupWhereInput } from './occupation-group-where.input';

@ArgsType()
export class UpdateManyOccupationGroupArgs {
  @Field(() => OccupationGroupUpdateManyMutationInput, { nullable: false })
  @Type(() => OccupationGroupUpdateManyMutationInput)
  data!: OccupationGroupUpdateManyMutationInput;

  @Field(() => OccupationGroupWhereInput, { nullable: true })
  @Type(() => OccupationGroupWhereInput)
  where?: OccupationGroupWhereInput;
}
