import { ApiProperty } from '@nestjs/swagger';
import { OpportunityState } from '@prisma/client';
import { IsIn, IsNumber, IsOptional, IsString, IsUUID, Max, Min } from 'class-validator';

export class CreateOpportunityDto {
  @ApiProperty()
  @IsOptional()
  @IsUUID(4)
  id?: string;

  @ApiProperty({ required: true })
  @IsUUID(4)
  hiring_manager_id: string;

  @ApiProperty({ required: false, nullable: true })
  @IsOptional()
  @IsUUID(4)
  role_id?: string | null;

  @ApiProperty({ required: false, nullable: true })
  @IsOptional()
  @IsString()
  available_as_of_date?: string | null;

  @ApiProperty({ required: false, nullable: true, minimum: 0, maximum: 13 })
  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 0 })
  @Min(0)
  @Max(13)
  duration?: number | null;

  @ApiProperty({ required: false, nullable: true })
  @IsOptional()
  @IsIn(Object.values(OpportunityState))
  state?: OpportunityState | null;

  @ApiProperty()
  @IsOptional()
  @IsString({ each: true })
  candidate_ids: string[];

  @ApiProperty()
  @IsOptional()
  @IsString({ each: true })
  location_ids: string[];

  @ApiProperty()
  @IsOptional()
  @IsString({ each: true })
  required_skill_ids: string[];

  @ApiProperty()
  @IsOptional()
  @IsString({ each: true })
  optional_skill_ids: string[];
}
