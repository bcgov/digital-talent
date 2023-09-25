import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IdentityScalarWhereInput } from './identity-scalar-where.input';
import { IdentityUpdateManyMutationInput } from './identity-update-many-mutation.input';

@InputType()
export class IdentityUpdateManyWithWhereWithoutUserInput {
  @Field(() => IdentityScalarWhereInput, { nullable: false })
  @Type(() => IdentityScalarWhereInput)
  where!: IdentityScalarWhereInput;

  @Field(() => IdentityUpdateManyMutationInput, { nullable: false })
  @Type(() => IdentityUpdateManyMutationInput)
  data!: IdentityUpdateManyMutationInput;
}
