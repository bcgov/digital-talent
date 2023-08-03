import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class GridStepEntity {
  name: number;

  rate_per_year: number;

  rate_per_month: number;

  rate_per_fortnight: number;

  rate_per_hour: number;
}
