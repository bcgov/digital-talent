import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class UpdateCandidateLocationDto {
  @ApiProperty()
  @IsUUID(4)
  location_id: string;
}
