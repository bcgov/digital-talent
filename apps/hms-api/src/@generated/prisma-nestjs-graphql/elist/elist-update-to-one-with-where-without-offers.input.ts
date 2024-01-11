import { Field, InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ElistWhereInput } from './elist-where.input';
import { ElistUpdateWithoutOffersInput } from './elist-update-without-offers.input';

@InputType()
export class ElistUpdateToOneWithWhereWithoutOffersInput {
  @Field(() => ElistWhereInput, { nullable: true })
  @Type(() => ElistWhereInput)
  where?: ElistWhereInput;

  @Field(() => ElistUpdateWithoutOffersInput, { nullable: false })
  @Type(() => ElistUpdateWithoutOffersInput)
  data!: ElistUpdateWithoutOffersInput;
}
