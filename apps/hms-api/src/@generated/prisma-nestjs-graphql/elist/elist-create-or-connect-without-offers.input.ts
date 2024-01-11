import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { ElistWhereUniqueInput } from './elist-where-unique.input';
import { ElistCreateWithoutOffersInput } from './elist-create-without-offers.input';

@InputType()
export class ElistCreateOrConnectWithoutOffersInput {
  @Field(() => ElistWhereUniqueInput, { nullable: false })
  @Type(() => ElistWhereUniqueInput)
  where!: Prisma.AtLeast<ElistWhereUniqueInput, 'id'>;

  @Field(() => ElistCreateWithoutOffersInput, { nullable: false })
  @Type(() => ElistCreateWithoutOffersInput)
  create!: ElistCreateWithoutOffersInput;
}
