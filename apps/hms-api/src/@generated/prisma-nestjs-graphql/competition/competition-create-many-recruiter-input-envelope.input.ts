import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { CompetitionCreateManyRecruiterInput } from './competition-create-many-recruiter.input';

@InputType()
export class CompetitionCreateManyRecruiterInputEnvelope {
  @Field(() => [CompetitionCreateManyRecruiterInput], { nullable: false })
  @Type(() => CompetitionCreateManyRecruiterInput)
  data!: Array<CompetitionCreateManyRecruiterInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
