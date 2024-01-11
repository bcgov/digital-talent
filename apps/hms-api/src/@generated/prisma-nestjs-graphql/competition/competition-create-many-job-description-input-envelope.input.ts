import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { CompetitionCreateManyJob_descriptionInput } from './competition-create-many-job-description.input';

@InputType()
export class CompetitionCreateManyJob_descriptionInputEnvelope {
  @Field(() => [CompetitionCreateManyJob_descriptionInput], { nullable: false })
  @Type(() => CompetitionCreateManyJob_descriptionInput)
  data!: Array<CompetitionCreateManyJob_descriptionInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
