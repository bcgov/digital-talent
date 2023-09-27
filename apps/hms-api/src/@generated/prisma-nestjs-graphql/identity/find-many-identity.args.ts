import { Field, ArgsType, HideField, Int } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { IdentityWhereInput } from './identity-where.input';
import { IdentityOrderByWithRelationInput } from './identity-order-by-with-relation.input';
import { IdentityWhereUniqueInput } from './identity-where-unique.input';
import { IdentityScalarFieldEnum } from './identity-scalar-field.enum';

@ArgsType()
export class FindManyIdentityArgs {
  @Field(() => IdentityWhereInput, { nullable: true })
  @Type(() => IdentityWhereInput)
  where?: IdentityWhereInput;

  @Field(() => [IdentityOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<IdentityOrderByWithRelationInput>;

  @HideField()
  cursor?: Prisma.AtLeast<IdentityWhereUniqueInput, 'sub_identity_provider'>;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @HideField()
  distinct?: Array<keyof typeof IdentityScalarFieldEnum>;
}
