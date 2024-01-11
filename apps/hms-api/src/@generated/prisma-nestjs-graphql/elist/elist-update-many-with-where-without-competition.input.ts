import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ElistScalarWhereInput } from './elist-scalar-where.input';
import { ElistUpdateManyMutationInput } from './elist-update-many-mutation.input';

@InputType()
export class ElistUpdateManyWithWhereWithoutCompetitionInput {
  @Field(() => ElistScalarWhereInput, { nullable: false })
  @Type(() => ElistScalarWhereInput)
  where!: ElistScalarWhereInput;

  @Field(() => ElistUpdateManyMutationInput, { nullable: false })
  @Type(() => ElistUpdateManyMutationInput)
  data!: ElistUpdateManyMutationInput;
}
