import { Field, InputType } from '@nestjs/graphql';
import { IsBoolean, IsUUID } from 'class-validator';
import { GraphQLUUID } from 'graphql-scalars';

@InputType()
export class CreateElistOfferInput {
  @Field((type) => GraphQLUUID)
  @IsUUID()
  id: string;

  @Field((type) => GraphQLUUID)
  @IsUUID()
  elist_id: string;

  @Field((type) => GraphQLUUID)
  @IsUUID()
  opportunity_id: string;

  @IsBoolean()
  is_accepted: boolean;
}
