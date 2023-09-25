import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { CompetitionWhereUniqueInput } from './competition-where-unique.input';
import { CompetitionUpdateWithoutRecruiterInput } from './competition-update-without-recruiter.input';
import { CompetitionCreateWithoutRecruiterInput } from './competition-create-without-recruiter.input';

@InputType()
export class CompetitionUpsertWithWhereUniqueWithoutRecruiterInput {
  @Field(() => CompetitionWhereUniqueInput, { nullable: false })
  @Type(() => CompetitionWhereUniqueInput)
  where!: Prisma.AtLeast<CompetitionWhereUniqueInput, 'id'>;

  @Field(() => CompetitionUpdateWithoutRecruiterInput, { nullable: false })
  @Type(() => CompetitionUpdateWithoutRecruiterInput)
  update!: CompetitionUpdateWithoutRecruiterInput;

  @Field(() => CompetitionCreateWithoutRecruiterInput, { nullable: false })
  @Type(() => CompetitionCreateWithoutRecruiterInput)
  create!: CompetitionCreateWithoutRecruiterInput;
}
