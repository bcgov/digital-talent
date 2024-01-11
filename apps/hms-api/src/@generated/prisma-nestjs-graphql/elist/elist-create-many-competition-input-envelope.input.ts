import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ElistCreateManyCompetitionInput } from './elist-create-many-competition.input';

@InputType()
export class ElistCreateManyCompetitionInputEnvelope {
  @Field(() => [ElistCreateManyCompetitionInput], { nullable: false })
  @Type(() => ElistCreateManyCompetitionInput)
  data!: Array<ElistCreateManyCompetitionInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
