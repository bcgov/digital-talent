import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { MinistryUpdateInput } from './ministry-update.input';
import { MinistryWhereUniqueInput } from './ministry-where-unique.input';

@ArgsType()
export class UpdateOneMinistryArgs {
  @Field(() => MinistryUpdateInput, { nullable: false })
  @Type(() => MinistryUpdateInput)
  data!: MinistryUpdateInput;

  @Field(() => MinistryWhereUniqueInput, { nullable: false })
  @Type(() => MinistryWhereUniqueInput)
  where!: Prisma.AtLeast<MinistryWhereUniqueInput, 'id'>;
}
