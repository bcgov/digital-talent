import { ResidencyStatus, CandidateStatus } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCandidateDto {
  name?: string;

  email_address?: string;

  linkedin_url?: string;

  available_at?: Date;

  would_relocate?: boolean;

  num_years_exp?: number;

  @ApiProperty({ enum: ResidencyStatus }) residency_status?: ResidencyStatus;

  @ApiProperty({ enum: CandidateStatus }) status?: CandidateStatus;

  is_contacted?: boolean;

  knowledge_and_abilities?: string;

  links?: string[];

  marketing_qualities?: string[];
}
