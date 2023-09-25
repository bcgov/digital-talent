import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { JobDescriptionWhereInput } from './job-description-where.input';
import { JobDescriptionUpdateWithoutCompetitionInput } from './job-description-update-without-competition.input';

@InputType()
export class JobDescriptionUpdateToOneWithWhereWithoutCompetitionInput {
  @Field(() => JobDescriptionWhereInput, { nullable: true })
  @Type(() => JobDescriptionWhereInput)
  where?: JobDescriptionWhereInput;

  @Field(() => JobDescriptionUpdateWithoutCompetitionInput, { nullable: false })
  @Type(() => JobDescriptionUpdateWithoutCompetitionInput)
  data!: JobDescriptionUpdateWithoutCompetitionInput;
}
