import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { CompetitionScalarWhereInput } from './competition-scalar-where.input';
import { CompetitionUpdateManyMutationInput } from './competition-update-many-mutation.input';

@InputType()
export class CompetitionUpdateManyWithWhereWithoutRecruiterInput {
  @Field(() => CompetitionScalarWhereInput, { nullable: false })
  @Type(() => CompetitionScalarWhereInput)
  where!: CompetitionScalarWhereInput;

  @Field(() => CompetitionUpdateManyMutationInput, { nullable: false })
  @Type(() => CompetitionUpdateManyMutationInput)
  data!: CompetitionUpdateManyMutationInput;
}
