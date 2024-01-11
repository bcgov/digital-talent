import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Type } from 'class-transformer';
import { OpportunityWhereUniqueInput } from './opportunity-where-unique.input';
import { OpportunityUpdateWithoutHiring_managerInput } from './opportunity-update-without-hiring-manager.input';
import { OpportunityCreateWithoutHiring_managerInput } from './opportunity-create-without-hiring-manager.input';

@InputType()
export class OpportunityUpsertWithWhereUniqueWithoutHiring_managerInput {
  @Field(() => OpportunityWhereUniqueInput, { nullable: false })
  @Type(() => OpportunityWhereUniqueInput)
  where!: Prisma.AtLeast<OpportunityWhereUniqueInput, 'id'>;

  @Field(() => OpportunityUpdateWithoutHiring_managerInput, { nullable: false })
  @Type(() => OpportunityUpdateWithoutHiring_managerInput)
  update!: OpportunityUpdateWithoutHiring_managerInput;

  @Field(() => OpportunityCreateWithoutHiring_managerInput, { nullable: false })
  @Type(() => OpportunityCreateWithoutHiring_managerInput)
  create!: OpportunityCreateWithoutHiring_managerInput;
}
