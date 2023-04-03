import { ApiProperty } from '@nestjs/swagger';
import { Candidate, ResidencyStatus } from '@prisma/client';

export class CandidateEntity implements Candidate {
  @ApiProperty()
  id: string;

  @ApiProperty({ nullable: true })
  assigned_to_id: string | null;

  @ApiProperty({ nullable: true })
  role_id: string | null;

  @ApiProperty({ nullable: true })
  name: string | null;

  @ApiProperty({ nullable: true })
  email_address: string | null;

  @ApiProperty({ nullable: true })
  linkedin_url: string | null;

  @ApiProperty({ nullable: true })
  available_as_of_date: string | null;

  @ApiProperty({ nullable: true })
  would_relocate: boolean | null;

  @ApiProperty({ nullable: true })
  num_years_exp: number | null;

  @ApiProperty({ nullable: true })
  residency_status: ResidencyStatus | null;

  @ApiProperty({ nullable: true })
  status: 'HIRED' | null;

  @ApiProperty({ nullable: true })
  is_contacted: boolean | null;

  @ApiProperty({ nullable: true })
  knowledge_and_abilities: string | null;

  @ApiProperty()
  links: string[];

  @ApiProperty()
  marketing_qualities: string[];

  @ApiProperty()
  location_ids: string[];

  @ApiProperty()
  created_at: Date;

  @ApiProperty({ nullable: true })
  updated_at: Date | null;
}
