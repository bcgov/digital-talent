import { Field, InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class OpportunityLocationScalarWhereInput {
  @Field(() => [OpportunityLocationScalarWhereInput], { nullable: true })
  AND?: Array<OpportunityLocationScalarWhereInput>;

  @Field(() => [OpportunityLocationScalarWhereInput], { nullable: true })
  OR?: Array<OpportunityLocationScalarWhereInput>;

  @Field(() => [OpportunityLocationScalarWhereInput], { nullable: true })
  NOT?: Array<OpportunityLocationScalarWhereInput>;

  @Field(() => UuidFilter, { nullable: true })
  location_id?: UuidFilter;

  @Field(() => UuidFilter, { nullable: true })
  opportunity_id?: UuidFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  created_at?: DateTimeFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  deleted_at?: DateTimeFilter;
}
