import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { OccupationGroupUpdateInput } from './occupation-group-update.input';
import { OccupationGroupWhereUniqueInput } from './occupation-group-where-unique.input';

@ArgsType()
export class UpdateOneOccupationGroupArgs {
  @Field(() => OccupationGroupUpdateInput, { nullable: false })
  @Type(() => OccupationGroupUpdateInput)
  data!: OccupationGroupUpdateInput;

  @Field(() => OccupationGroupWhereUniqueInput, { nullable: false })
  @Type(() => OccupationGroupWhereUniqueInput)
  where!: Prisma.AtLeast<OccupationGroupWhereUniqueInput, 'id' | 'code' | 'code'>;
}
