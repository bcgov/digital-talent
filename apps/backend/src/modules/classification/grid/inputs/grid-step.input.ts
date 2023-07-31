import { InputType } from '@nestjs/graphql';
import { IsNumber } from 'class-validator';

@InputType()
export class GridStepInput {
  @IsNumber({ maxDecimalPlaces: 0 })
  name: number;

  @IsNumber({ maxDecimalPlaces: 4 })
  rate_per_year: number;

  @IsNumber({ maxDecimalPlaces: 4 })
  rate_per_month: number;

  @IsNumber({ maxDecimalPlaces: 4 })
  rate_per_fortnight: number;

  @IsNumber({ maxDecimalPlaces: 4 })
  rate_per_hour: number;
}
