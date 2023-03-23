import { OpportunityState } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateOpportunityDto {
  @ApiProperty({ enum: OpportunityState })
  state?: OpportunityState;
}
