import { Module } from '@nestjs/common';
import { PrismaService } from '../services/prisma/prisma.service';
import { PicklistApiV0Controller } from './api/v0.controller';
import { PicklistService } from './picklist.service';

@Module({
  controllers: [PicklistApiV0Controller],
  providers: [PicklistService, PrismaService],
})
export class PicklistModule {}
