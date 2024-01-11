import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { CompetitionUpdateManyMutationInput } from './competition-update-many-mutation.input';
import { CompetitionWhereInput } from './competition-where.input';

@ArgsType()
export class UpdateManyCompetitionArgs {
  @Field(() => CompetitionUpdateManyMutationInput, { nullable: false })
  @Type(() => CompetitionUpdateManyMutationInput)
  data!: CompetitionUpdateManyMutationInput;

  @Field(() => CompetitionWhereInput, { nullable: true })
  @Type(() => CompetitionWhereInput)
  where?: CompetitionWhereInput;
}
