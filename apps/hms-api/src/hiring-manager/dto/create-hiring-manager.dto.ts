import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateHiringManagerDto {
  @ApiProperty()
  @IsOptional()
  @IsUUID(4)
  id?: string;

  @ApiProperty({ required: false, nullable: true })
  @IsOptional()
  @IsUUID(4)
  assigned_to_id?: string | null;

  @ApiProperty({ required: false, nullable: true })
  @IsOptional()
  @IsUUID(4)
  ministry_id?: string | null;

  @ApiProperty({ required: false, nullable: true })
  @IsOptional()
  @IsString()
  name?: string | null;

  @ApiProperty({ required: false, nullable: true })
  @IsOptional()
  @IsString()
  email?: string | null;
}
