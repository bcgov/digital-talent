import { Module } from '@nestjs/common';
import { PicklistService } from '../../picklist/picklist.service';
import { PrismaService } from '../../services/prisma/prisma.service';
import { PicklistController } from './picklist.controller';

@Module({
  controllers: [PicklistController],
  providers: [PicklistService, PrismaService],
})
export class ApiV0Module {}
