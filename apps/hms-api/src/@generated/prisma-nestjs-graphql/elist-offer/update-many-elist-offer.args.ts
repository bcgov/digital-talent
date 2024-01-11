import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ElistOfferUpdateManyMutationInput } from './elist-offer-update-many-mutation.input';
import { ElistOfferWhereInput } from './elist-offer-where.input';

@ArgsType()
export class UpdateManyElistOfferArgs {
  @Field(() => ElistOfferUpdateManyMutationInput, { nullable: false })
  @Type(() => ElistOfferUpdateManyMutationInput)
  data!: ElistOfferUpdateManyMutationInput;

  @Field(() => ElistOfferWhereInput, { nullable: true })
  @Type(() => ElistOfferWhereInput)
  where?: ElistOfferWhereInput;
}
