import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ElistCreateWithoutElistOfferInput } from './elist-create-without-elist-offer.input';
import { ElistCreateOrConnectWithoutElistOfferInput } from './elist-create-or-connect-without-elist-offer.input';
import { ElistWhereUniqueInput } from './elist-where-unique.input';

@InputType()
export class ElistCreateNestedOneWithoutElistOfferInput {
  @Field(() => ElistCreateWithoutElistOfferInput, { nullable: true })
  @Type(() => ElistCreateWithoutElistOfferInput)
  create?: ElistCreateWithoutElistOfferInput;

  @Field(() => ElistCreateOrConnectWithoutElistOfferInput, { nullable: true })
  @Type(() => ElistCreateOrConnectWithoutElistOfferInput)
  connectOrCreate?: ElistCreateOrConnectWithoutElistOfferInput;

  @Field(() => ElistWhereUniqueInput, { nullable: true })
  @Type(() => ElistWhereUniqueInput)
  connect?: Prisma.AtLeast<ElistWhereUniqueInput, 'id'>;
}
