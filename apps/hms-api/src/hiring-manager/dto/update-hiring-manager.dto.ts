import { PartialType } from '@nestjs/swagger';
import { CreateHiringManagerDto } from './create-hiring-manager.dto';

export class UpdateHiringManagerDto extends PartialType(CreateHiringManagerDto) {}
