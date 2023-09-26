import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ElistUpdateWithoutOffersInput } from './elist-update-without-offers.input';
import { ElistCreateWithoutOffersInput } from './elist-create-without-offers.input';
import { ElistWhereInput } from './elist-where.input';

@InputType()
export class ElistUpsertWithoutOffersInput {
  @Field(() => ElistUpdateWithoutOffersInput, { nullable: false })
  @Type(() => ElistUpdateWithoutOffersInput)
  update!: ElistUpdateWithoutOffersInput;

  @Field(() => ElistCreateWithoutOffersInput, { nullable: false })
  @Type(() => ElistCreateWithoutOffersInput)
  create!: ElistCreateWithoutOffersInput;

  @Field(() => ElistWhereInput, { nullable: true })
  @Type(() => ElistWhereInput)
  where?: ElistWhereInput;
}
