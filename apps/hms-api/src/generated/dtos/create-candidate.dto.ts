import { ResidencyStatus, CandidateStatus } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCandidateDto {
  id?: string;

  name?: string;

  email_address?: string;

  linkedin_url?: string;

  available_as_of_date?: string;

  would_relocate?: boolean;

  num_years_exp?: number;

  @ApiProperty({ enum: ResidencyStatus }) residency_status?: ResidencyStatus;

  @ApiProperty({ enum: CandidateStatus }) status?: CandidateStatus;

  is_contacted?: boolean;

  knowledge_and_abilities?: string;

  links: string[];

  marketing_qualities: string[];
}
