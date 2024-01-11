import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ElistCreateWithoutOffersInput } from './elist-create-without-offers.input';
import { ElistCreateOrConnectWithoutOffersInput } from './elist-create-or-connect-without-offers.input';
import { ElistUpsertWithoutOffersInput } from './elist-upsert-without-offers.input';
import { ElistWhereUniqueInput } from './elist-where-unique.input';
import { ElistUpdateToOneWithWhereWithoutOffersInput } from './elist-update-to-one-with-where-without-offers.input';

@InputType()
export class ElistUpdateOneRequiredWithoutOffersNestedInput {
  @Field(() => ElistCreateWithoutOffersInput, { nullable: true })
  @Type(() => ElistCreateWithoutOffersInput)
  create?: ElistCreateWithoutOffersInput;

  @Field(() => ElistCreateOrConnectWithoutOffersInput, { nullable: true })
  @Type(() => ElistCreateOrConnectWithoutOffersInput)
  connectOrCreate?: ElistCreateOrConnectWithoutOffersInput;

  @Field(() => ElistUpsertWithoutOffersInput, { nullable: true })
  @Type(() => ElistUpsertWithoutOffersInput)
  upsert?: ElistUpsertWithoutOffersInput;

  @Field(() => ElistWhereUniqueInput, { nullable: true })
  @Type(() => ElistWhereUniqueInput)
  connect?: Prisma.AtLeast<ElistWhereUniqueInput, 'id'>;

  @Field(() => ElistUpdateToOneWithWhereWithoutOffersInput, { nullable: true })
  @Type(() => ElistUpdateToOneWithWhereWithoutOffersInput)
  update?: ElistUpdateToOneWithWhereWithoutOffersInput;
}
