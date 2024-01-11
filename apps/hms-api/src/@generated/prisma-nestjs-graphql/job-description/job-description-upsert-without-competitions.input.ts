import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { JobDescriptionUpdateWithoutCompetitionsInput } from './job-description-update-without-competitions.input';
import { JobDescriptionCreateWithoutCompetitionsInput } from './job-description-create-without-competitions.input';
import { JobDescriptionWhereInput } from './job-description-where.input';

@InputType()
export class JobDescriptionUpsertWithoutCompetitionsInput {
  @Field(() => JobDescriptionUpdateWithoutCompetitionsInput, { nullable: false })
  @Type(() => JobDescriptionUpdateWithoutCompetitionsInput)
  update!: JobDescriptionUpdateWithoutCompetitionsInput;

  @Field(() => JobDescriptionCreateWithoutCompetitionsInput, { nullable: false })
  @Type(() => JobDescriptionCreateWithoutCompetitionsInput)
  create!: JobDescriptionCreateWithoutCompetitionsInput;

  @Field(() => JobDescriptionWhereInput, { nullable: true })
  @Type(() => JobDescriptionWhereInput)
  where?: JobDescriptionWhereInput;
}
