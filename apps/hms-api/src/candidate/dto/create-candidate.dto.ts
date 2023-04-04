import { ApiProperty } from '@nestjs/swagger';
import { ResidencyStatus } from '@prisma/client';
import { IsBoolean, IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateCandidateDto {
  @ApiProperty()
  @IsOptional()
  @IsUUID(4)
  id?: string;

  @ApiProperty({ required: false, nullable: true })
  @IsOptional()
  @IsString()
  assigned_to_id?: string | null;

  @ApiProperty({ required: false, nullable: true })
  @IsOptional()
  @IsString()
  role_id?: string | null;

  @ApiProperty({ required: false, nullable: true })
  @IsOptional()
  @IsString()
  name?: string | null;

  @ApiProperty({ required: false, nullable: true })
  @IsOptional()
  @IsString()
  email_address?: string | null;

  @ApiProperty({ required: false, nullable: true })
  @IsOptional()
  @IsString()
  linkedin_url?: string | null;

  @ApiProperty({ required: false, nullable: true })
  @IsOptional()
  @IsString()
  available_as_of_date?: string | null;

  @ApiProperty({ required: false, nullable: true })
  @IsOptional()
  @IsBoolean()
  would_relocate?: boolean | null;

  @ApiProperty({ required: false, nullable: true })
  @IsOptional()
  @IsNumber()
  num_years_exp?: number | null;

  @ApiProperty({ required: false, nullable: true })
  @IsOptional()
  residency_status?: ResidencyStatus | null;

  @ApiProperty({ required: false, nullable: true })
  @IsOptional()
  status?: 'HIRED' | null;

  @ApiProperty({ required: false, nullable: true })
  @IsOptional()
  @IsBoolean()
  is_contacted?: boolean | null;

  @ApiProperty()
  @IsOptional()
  @IsString({ each: true })
  knowledge_and_abilities?: string[];

  @ApiProperty()
  @IsOptional()
  @IsString({ each: true })
  links?: string[];

  @ApiProperty()
  @IsOptional()
  @IsString({ each: true })
  marketing_qualities?: string[];

  @ApiProperty()
  @IsOptional()
  @IsString({ each: true })
  location_ids?: string[];

  @ApiProperty()
  @IsOptional()
  @IsString({ each: true })
  skill_ids?: string[];
}
