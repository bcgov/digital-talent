import { IsIn, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateCompetitionDto {
  @IsUUID()
  id: string;

  @IsUUID()
  job_description_id: string;

  @IsUUID()
  recruiter_id: string;

  @IsOptional()
  @IsString()
  deltek_id: string;

  @IsIn(['CMH', 'RH'])
  category: 'CMH' | 'RH';
}
