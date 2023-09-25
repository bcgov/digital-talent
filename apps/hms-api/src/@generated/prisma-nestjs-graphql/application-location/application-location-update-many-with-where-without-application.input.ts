import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ApplicationLocationScalarWhereInput } from './application-location-scalar-where.input';
import { ApplicationLocationUpdateManyMutationInput } from './application-location-update-many-mutation.input';

@InputType()
export class ApplicationLocationUpdateManyWithWhereWithoutApplicationInput {
  @Field(() => ApplicationLocationScalarWhereInput, { nullable: false })
  @Type(() => ApplicationLocationScalarWhereInput)
  where!: ApplicationLocationScalarWhereInput;

  @Field(() => ApplicationLocationUpdateManyMutationInput, { nullable: false })
  @Type(() => ApplicationLocationUpdateManyMutationInput)
  data!: ApplicationLocationUpdateManyMutationInput;
}
