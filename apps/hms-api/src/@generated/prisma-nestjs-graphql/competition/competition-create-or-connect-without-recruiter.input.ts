import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { CompetitionWhereUniqueInput } from './competition-where-unique.input';
import { CompetitionCreateWithoutRecruiterInput } from './competition-create-without-recruiter.input';

@InputType()
export class CompetitionCreateOrConnectWithoutRecruiterInput {
  @Field(() => CompetitionWhereUniqueInput, { nullable: false })
  @Type(() => CompetitionWhereUniqueInput)
  where!: Prisma.AtLeast<CompetitionWhereUniqueInput, 'id'>;

  @Field(() => CompetitionCreateWithoutRecruiterInput, { nullable: false })
  @Type(() => CompetitionCreateWithoutRecruiterInput)
  create!: CompetitionCreateWithoutRecruiterInput;
}
