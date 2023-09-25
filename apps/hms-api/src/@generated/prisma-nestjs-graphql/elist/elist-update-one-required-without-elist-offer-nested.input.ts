import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ElistCreateWithoutElistOfferInput } from './elist-create-without-elist-offer.input';
import { ElistCreateOrConnectWithoutElistOfferInput } from './elist-create-or-connect-without-elist-offer.input';
import { ElistUpsertWithoutElistOfferInput } from './elist-upsert-without-elist-offer.input';
import { ElistWhereUniqueInput } from './elist-where-unique.input';
import { ElistUpdateToOneWithWhereWithoutElistOfferInput } from './elist-update-to-one-with-where-without-elist-offer.input';

@InputType()
export class ElistUpdateOneRequiredWithoutElistOfferNestedInput {
  @Field(() => ElistCreateWithoutElistOfferInput, { nullable: true })
  @Type(() => ElistCreateWithoutElistOfferInput)
  create?: ElistCreateWithoutElistOfferInput;

  @Field(() => ElistCreateOrConnectWithoutElistOfferInput, { nullable: true })
  @Type(() => ElistCreateOrConnectWithoutElistOfferInput)
  connectOrCreate?: ElistCreateOrConnectWithoutElistOfferInput;

  @Field(() => ElistUpsertWithoutElistOfferInput, { nullable: true })
  @Type(() => ElistUpsertWithoutElistOfferInput)
  upsert?: ElistUpsertWithoutElistOfferInput;

  @Field(() => ElistWhereUniqueInput, { nullable: true })
  @Type(() => ElistWhereUniqueInput)
  connect?: Prisma.AtLeast<ElistWhereUniqueInput, 'id'>;

  @Field(() => ElistUpdateToOneWithWhereWithoutElistOfferInput, { nullable: true })
  @Type(() => ElistUpdateToOneWithWhereWithoutElistOfferInput)
  update?: ElistUpdateToOneWithWhereWithoutElistOfferInput;
}
