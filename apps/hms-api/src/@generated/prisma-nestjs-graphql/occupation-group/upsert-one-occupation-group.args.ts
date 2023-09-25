import { Field, ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { OccupationGroupWhereUniqueInput } from './occupation-group-where-unique.input';
import { OccupationGroupCreateInput } from './occupation-group-create.input';
import { OccupationGroupUpdateInput } from './occupation-group-update.input';

@ArgsType()
export class UpsertOneOccupationGroupArgs {
  @Field(() => OccupationGroupWhereUniqueInput, { nullable: false })
  @Type(() => OccupationGroupWhereUniqueInput)
  where!: Prisma.AtLeast<OccupationGroupWhereUniqueInput, 'id' | 'code' | 'code'>;

  @Field(() => OccupationGroupCreateInput, { nullable: false })
  @Type(() => OccupationGroupCreateInput)
  create!: OccupationGroupCreateInput;

  @Field(() => OccupationGroupUpdateInput, { nullable: false })
  @Type(() => OccupationGroupUpdateInput)
  update!: OccupationGroupUpdateInput;
}
