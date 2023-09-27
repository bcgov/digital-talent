import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ElistOfferCreateManyInput } from './elist-offer-create-many.input';

@ArgsType()
export class CreateManyElistOfferArgs {
  @Field(() => [ElistOfferCreateManyInput], { nullable: false })
  @Type(() => ElistOfferCreateManyInput)
  data!: Array<ElistOfferCreateManyInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
