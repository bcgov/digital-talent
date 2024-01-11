import { Field, ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ElistOfferWhereInput } from './elist-offer-where.input';

@ArgsType()
export class DeleteManyElistOfferArgs {
  @Field(() => ElistOfferWhereInput, { nullable: true })
  @Type(() => ElistOfferWhereInput)
  where?: ElistOfferWhereInput;
}
