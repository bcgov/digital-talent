import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ElistOfferCreateInput } from './elist-offer-create.input';

@ArgsType()
export class CreateOneElistOfferArgs {
  @Field(() => ElistOfferCreateInput, { nullable: false })
  @Type(() => ElistOfferCreateInput)
  data!: ElistOfferCreateInput;
}
