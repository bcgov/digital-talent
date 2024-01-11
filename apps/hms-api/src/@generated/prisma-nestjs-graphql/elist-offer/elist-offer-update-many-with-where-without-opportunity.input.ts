import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ElistOfferScalarWhereInput } from './elist-offer-scalar-where.input';
import { ElistOfferUpdateManyMutationInput } from './elist-offer-update-many-mutation.input';

@InputType()
export class ElistOfferUpdateManyWithWhereWithoutOpportunityInput {
  @Field(() => ElistOfferScalarWhereInput, { nullable: false })
  @Type(() => ElistOfferScalarWhereInput)
  where!: ElistOfferScalarWhereInput;

  @Field(() => ElistOfferUpdateManyMutationInput, { nullable: false })
  @Type(() => ElistOfferUpdateManyMutationInput)
  data!: ElistOfferUpdateManyMutationInput;
}
