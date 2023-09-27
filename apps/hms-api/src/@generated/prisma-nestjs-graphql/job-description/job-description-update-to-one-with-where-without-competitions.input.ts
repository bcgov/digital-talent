import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { JobDescriptionWhereInput } from './job-description-where.input';
import { JobDescriptionUpdateWithoutCompetitionsInput } from './job-description-update-without-competitions.input';

@InputType()
export class JobDescriptionUpdateToOneWithWhereWithoutCompetitionsInput {
  @Field(() => JobDescriptionWhereInput, { nullable: true })
  @Type(() => JobDescriptionWhereInput)
  where?: JobDescriptionWhereInput;

  @Field(() => JobDescriptionUpdateWithoutCompetitionsInput, { nullable: false })
  @Type(() => JobDescriptionUpdateWithoutCompetitionsInput)
  data!: JobDescriptionUpdateWithoutCompetitionsInput;
}
