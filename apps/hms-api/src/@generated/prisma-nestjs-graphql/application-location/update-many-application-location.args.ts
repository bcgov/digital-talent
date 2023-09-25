import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ApplicationLocationUpdateManyMutationInput } from './application-location-update-many-mutation.input';
import { ApplicationLocationWhereInput } from './application-location-where.input';

@ArgsType()
export class UpdateManyApplicationLocationArgs {
  @Field(() => ApplicationLocationUpdateManyMutationInput, { nullable: false })
  @Type(() => ApplicationLocationUpdateManyMutationInput)
  data!: ApplicationLocationUpdateManyMutationInput;

  @Field(() => ApplicationLocationWhereInput, { nullable: true })
  @Type(() => ApplicationLocationWhereInput)
  where?: ApplicationLocationWhereInput;
}
