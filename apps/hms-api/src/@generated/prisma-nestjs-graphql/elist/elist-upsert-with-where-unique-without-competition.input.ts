import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { ElistWhereUniqueInput } from './elist-where-unique.input';
import { ElistUpdateWithoutCompetitionInput } from './elist-update-without-competition.input';
import { ElistCreateWithoutCompetitionInput } from './elist-create-without-competition.input';

@InputType()
export class ElistUpsertWithWhereUniqueWithoutCompetitionInput {
  @Field(() => ElistWhereUniqueInput, { nullable: false })
  @Type(() => ElistWhereUniqueInput)
  where!: Prisma.AtLeast<ElistWhereUniqueInput, 'id'>;

  @Field(() => ElistUpdateWithoutCompetitionInput, { nullable: false })
  @Type(() => ElistUpdateWithoutCompetitionInput)
  update!: ElistUpdateWithoutCompetitionInput;

  @Field(() => ElistCreateWithoutCompetitionInput, { nullable: false })
  @Type(() => ElistCreateWithoutCompetitionInput)
  create!: ElistCreateWithoutCompetitionInput;
}
