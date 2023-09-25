import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { OpportunityWhereUniqueInput } from './opportunity-where-unique.input';
import { OpportunityUpdateWithoutHiring_managerInput } from './opportunity-update-without-hiring-manager.input';

@InputType()
export class OpportunityUpdateWithWhereUniqueWithoutHiring_managerInput {
  @Field(() => OpportunityWhereUniqueInput, { nullable: false })
  @Type(() => OpportunityWhereUniqueInput)
  where!: Prisma.AtLeast<OpportunityWhereUniqueInput, 'id'>;

  @Field(() => OpportunityUpdateWithoutHiring_managerInput, { nullable: false })
  @Type(() => OpportunityUpdateWithoutHiring_managerInput)
  data!: OpportunityUpdateWithoutHiring_managerInput;
}
