import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { OpportunityWhereUniqueInput } from './opportunity-where-unique.input';
import { OpportunityCreateWithoutMinistryInput } from './opportunity-create-without-ministry.input';

@InputType()
export class OpportunityCreateOrConnectWithoutMinistryInput {
  @Field(() => OpportunityWhereUniqueInput, { nullable: false })
  @Type(() => OpportunityWhereUniqueInput)
  where!: Prisma.AtLeast<OpportunityWhereUniqueInput, 'id'>;

  @Field(() => OpportunityCreateWithoutMinistryInput, { nullable: false })
  @Type(() => OpportunityCreateWithoutMinistryInput)
  create!: OpportunityCreateWithoutMinistryInput;
}
