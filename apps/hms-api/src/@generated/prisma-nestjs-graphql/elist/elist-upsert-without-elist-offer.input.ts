import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ElistUpdateWithoutElistOfferInput } from './elist-update-without-elist-offer.input';
import { ElistCreateWithoutElistOfferInput } from './elist-create-without-elist-offer.input';
import { ElistWhereInput } from './elist-where.input';

@InputType()
export class ElistUpsertWithoutElistOfferInput {
  @Field(() => ElistUpdateWithoutElistOfferInput, { nullable: false })
  @Type(() => ElistUpdateWithoutElistOfferInput)
  update!: ElistUpdateWithoutElistOfferInput;

  @Field(() => ElistCreateWithoutElistOfferInput, { nullable: false })
  @Type(() => ElistCreateWithoutElistOfferInput)
  create!: ElistCreateWithoutElistOfferInput;

  @Field(() => ElistWhereInput, { nullable: true })
  @Type(() => ElistWhereInput)
  where?: ElistWhereInput;
}
