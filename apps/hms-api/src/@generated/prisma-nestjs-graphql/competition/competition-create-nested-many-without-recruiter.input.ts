import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { CompetitionCreateWithoutRecruiterInput } from './competition-create-without-recruiter.input';
import { CompetitionCreateOrConnectWithoutRecruiterInput } from './competition-create-or-connect-without-recruiter.input';
import { CompetitionCreateManyRecruiterInputEnvelope } from './competition-create-many-recruiter-input-envelope.input';
import { CompetitionWhereUniqueInput } from './competition-where-unique.input';

@InputType()
export class CompetitionCreateNestedManyWithoutRecruiterInput {
  @Field(() => [CompetitionCreateWithoutRecruiterInput], { nullable: true })
  @Type(() => CompetitionCreateWithoutRecruiterInput)
  create?: Array<CompetitionCreateWithoutRecruiterInput>;

  @Field(() => [CompetitionCreateOrConnectWithoutRecruiterInput], { nullable: true })
  @Type(() => CompetitionCreateOrConnectWithoutRecruiterInput)
  connectOrCreate?: Array<CompetitionCreateOrConnectWithoutRecruiterInput>;

  @Field(() => CompetitionCreateManyRecruiterInputEnvelope, { nullable: true })
  @Type(() => CompetitionCreateManyRecruiterInputEnvelope)
  createMany?: CompetitionCreateManyRecruiterInputEnvelope;

  @Field(() => [CompetitionWhereUniqueInput], { nullable: true })
  @Type(() => CompetitionWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<CompetitionWhereUniqueInput, 'id'>>;
}
