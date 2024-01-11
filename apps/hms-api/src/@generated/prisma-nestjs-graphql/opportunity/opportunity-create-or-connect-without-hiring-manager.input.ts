import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { OpportunityWhereUniqueInput } from './opportunity-where-unique.input';
import { OpportunityCreateWithoutHiring_managerInput } from './opportunity-create-without-hiring-manager.input';

@InputType()
export class OpportunityCreateOrConnectWithoutHiring_managerInput {
  @Field(() => OpportunityWhereUniqueInput, { nullable: false })
  @Type(() => OpportunityWhereUniqueInput)
  where!: Prisma.AtLeast<OpportunityWhereUniqueInput, 'id'>;

  @Field(() => OpportunityCreateWithoutHiring_managerInput, { nullable: false })
  @Type(() => OpportunityCreateWithoutHiring_managerInput)
  create!: OpportunityCreateWithoutHiring_managerInput;
}
