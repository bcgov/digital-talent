import { ObjectType } from '@nestjs/graphql';

interface IGridStepModel {
  name: number;
  rate_per_year: number;
  rate_per_month: number;
  rate_per_fortnight: number;
  rate_per_hour: number;
}

@ObjectType()
export class GridStepModel implements IGridStepModel {
  name: number;

  rate_per_year: number;

  rate_per_month: number;

  rate_per_fortnight: number;

  rate_per_hour: number;
}
