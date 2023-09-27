import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ApplicationScalarWhereInput } from './application-scalar-where.input';
import { ApplicationUpdateManyMutationInput } from './application-update-many-mutation.input';

@InputType()
export class ApplicationUpdateManyWithWhereWithoutApplicantInput {
  @Field(() => ApplicationScalarWhereInput, { nullable: false })
  @Type(() => ApplicationScalarWhereInput)
  where!: ApplicationScalarWhereInput;

  @Field(() => ApplicationUpdateManyMutationInput, { nullable: false })
  @Type(() => ApplicationUpdateManyMutationInput)
  data!: ApplicationUpdateManyMutationInput;
}
