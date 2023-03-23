import { OpportunityState } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOpportunityDto {
  id?: string;

  @ApiProperty({ enum: OpportunityState })
  state: OpportunityState;
}
