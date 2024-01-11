import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { ElistWhereUniqueInput } from './elist-where-unique.input';
import { ElistUpdateWithoutCompetitionInput } from './elist-update-without-competition.input';

@InputType()
export class ElistUpdateWithWhereUniqueWithoutCompetitionInput {
  @Field(() => ElistWhereUniqueInput, { nullable: false })
  @Type(() => ElistWhereUniqueInput)
  where!: Prisma.AtLeast<ElistWhereUniqueInput, 'id'>;

  @Field(() => ElistUpdateWithoutCompetitionInput, { nullable: false })
  @Type(() => ElistUpdateWithoutCompetitionInput)
  data!: ElistUpdateWithoutCompetitionInput;
}
