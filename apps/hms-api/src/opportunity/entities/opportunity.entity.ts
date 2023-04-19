import { ApiProperty } from '@nestjs/swagger';
import { Opportunity, OpportunityState } from '@prisma/client';

export class OpportunityEntity implements Opportunity {
  @ApiProperty()
  id: string;

  @ApiProperty()
  hiring_manager_id: string;

  @ApiProperty({ nullable: true })
  role_id: string | null;

  @ApiProperty({ nullable: true })
  available_as_of_date: string | null;

  @ApiProperty({ nullable: true, minimum: 0, maximum: 13 })
  duration: number | null;

  @ApiProperty({ nullable: true })
  state: OpportunityState | null;

  @ApiProperty()
  candidate_ids: string[];

  @ApiProperty()
  location_ids: string[];

  @ApiProperty()
  skill_ids: string[];

  @ApiProperty()
  created_at: Date;

  @ApiProperty({ nullable: true })
  updated_at: Date | null;
}
