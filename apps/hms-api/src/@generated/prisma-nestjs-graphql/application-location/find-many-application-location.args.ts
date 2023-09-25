import { Field, ArgsType, HideField, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ApplicationLocationWhereInput } from './application-location-where.input';
import { ApplicationLocationOrderByWithRelationInput } from './application-location-order-by-with-relation.input';
import { ApplicationLocationWhereUniqueInput } from './application-location-where-unique.input';
import { ApplicationLocationScalarFieldEnum } from './application-location-scalar-field.enum';

@ArgsType()
export class FindManyApplicationLocationArgs {
  @Field(() => ApplicationLocationWhereInput, { nullable: true })
  @Type(() => ApplicationLocationWhereInput)
  where?: ApplicationLocationWhereInput;

  @Field(() => [ApplicationLocationOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<ApplicationLocationOrderByWithRelationInput>;

  @HideField()
  cursor?: Prisma.AtLeast<ApplicationLocationWhereUniqueInput, 'application_id_location_id'>;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @HideField()
  distinct?: Array<keyof typeof ApplicationLocationScalarFieldEnum>;
}
