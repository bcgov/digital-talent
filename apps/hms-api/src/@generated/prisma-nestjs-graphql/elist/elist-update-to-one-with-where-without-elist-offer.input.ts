import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ElistWhereInput } from './elist-where.input';
import { ElistUpdateWithoutElistOfferInput } from './elist-update-without-elist-offer.input';

@InputType()
export class ElistUpdateToOneWithWhereWithoutElistOfferInput {
  @Field(() => ElistWhereInput, { nullable: true })
  @Type(() => ElistWhereInput)
  where?: ElistWhereInput;

  @Field(() => ElistUpdateWithoutElistOfferInput, { nullable: false })
  @Type(() => ElistUpdateWithoutElistOfferInput)
  data!: ElistUpdateWithoutElistOfferInput;
}
