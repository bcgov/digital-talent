import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ElistOfferCreateManyElistInput } from './elist-offer-create-many-elist.input';

@InputType()
export class ElistOfferCreateManyElistInputEnvelope {
  @Field(() => [ElistOfferCreateManyElistInput], { nullable: false })
  @Type(() => ElistOfferCreateManyElistInput)
  data!: Array<ElistOfferCreateManyElistInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
