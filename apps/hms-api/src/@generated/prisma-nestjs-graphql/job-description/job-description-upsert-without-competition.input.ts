import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { JobDescriptionUpdateWithoutCompetitionInput } from './job-description-update-without-competition.input';
import { JobDescriptionCreateWithoutCompetitionInput } from './job-description-create-without-competition.input';
import { JobDescriptionWhereInput } from './job-description-where.input';

@InputType()
export class JobDescriptionUpsertWithoutCompetitionInput {
  @Field(() => JobDescriptionUpdateWithoutCompetitionInput, { nullable: false })
  @Type(() => JobDescriptionUpdateWithoutCompetitionInput)
  update!: JobDescriptionUpdateWithoutCompetitionInput;

  @Field(() => JobDescriptionCreateWithoutCompetitionInput, { nullable: false })
  @Type(() => JobDescriptionCreateWithoutCompetitionInput)
  create!: JobDescriptionCreateWithoutCompetitionInput;

  @Field(() => JobDescriptionWhereInput, { nullable: true })
  @Type(() => JobDescriptionWhereInput)
  where?: JobDescriptionWhereInput;
}
