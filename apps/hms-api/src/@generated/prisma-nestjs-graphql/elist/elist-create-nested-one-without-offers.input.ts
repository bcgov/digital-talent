import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ElistCreateWithoutOffersInput } from './elist-create-without-offers.input';
import { ElistCreateOrConnectWithoutOffersInput } from './elist-create-or-connect-without-offers.input';
import { ElistWhereUniqueInput } from './elist-where-unique.input';

@InputType()
export class ElistCreateNestedOneWithoutOffersInput {
  @Field(() => ElistCreateWithoutOffersInput, { nullable: true })
  @Type(() => ElistCreateWithoutOffersInput)
  create?: ElistCreateWithoutOffersInput;

  @Field(() => ElistCreateOrConnectWithoutOffersInput, { nullable: true })
  @Type(() => ElistCreateOrConnectWithoutOffersInput)
  connectOrCreate?: ElistCreateOrConnectWithoutOffersInput;

  @Field(() => ElistWhereUniqueInput, { nullable: true })
  @Type(() => ElistWhereUniqueInput)
  connect?: Prisma.AtLeast<ElistWhereUniqueInput, 'id'>;
}
