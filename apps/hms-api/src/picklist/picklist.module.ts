import { Module } from '@nestjs/common';
import { PrismaService } from '../services/prisma/prisma.service';
import { PicklistService } from './picklist.service';

@Module({
  providers: [PicklistService, PrismaService],
})
export class PicklistModule {}
