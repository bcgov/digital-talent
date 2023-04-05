import { ApiProperty } from '@nestjs/swagger';
import { HiringManager } from '@prisma/client';

export class HiringManagerEntity implements HiringManager {
  @ApiProperty()
  id: string;

  @ApiProperty({ nullable: true })
  assigned_to_id: string | null;

  @ApiProperty({ nullable: true })
  ministry_id: string | null;

  @ApiProperty({ nullable: true })
  name: string | null;

  @ApiProperty({ nullable: true })
  email: string | null;

  @ApiProperty()
  created_at: Date;

  @ApiProperty({ nullable: true })
  updated_at: Date | null;
}
