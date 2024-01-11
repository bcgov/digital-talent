import { Field, ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { OccupationGroupWhereUniqueInput } from './occupation-group-where-unique.input';

@ArgsType()
export class FindUniqueOccupationGroupOrThrowArgs {
  @Field(() => OccupationGroupWhereUniqueInput, { nullable: false })
  @Type(() => OccupationGroupWhereUniqueInput)
  where!: Prisma.AtLeast<OccupationGroupWhereUniqueInput, 'id' | 'code' | 'code'>;
}
