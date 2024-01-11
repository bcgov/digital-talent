import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { OpportunityWhereUniqueInput } from './opportunity-where-unique.input';
import { OpportunityUpdateWithoutMinistryInput } from './opportunity-update-without-ministry.input';

@InputType()
export class OpportunityUpdateWithWhereUniqueWithoutMinistryInput {
  @Field(() => OpportunityWhereUniqueInput, { nullable: false })
  @Type(() => OpportunityWhereUniqueInput)
  where!: Prisma.AtLeast<OpportunityWhereUniqueInput, 'id'>;

  @Field(() => OpportunityUpdateWithoutMinistryInput, { nullable: false })
  @Type(() => OpportunityUpdateWithoutMinistryInput)
  data!: OpportunityUpdateWithoutMinistryInput;
}
