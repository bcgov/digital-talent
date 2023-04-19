import { Module } from '@nestjs/common';
import { PrismaService } from '../services/prisma/prisma.service';
import { HiringManagerApiV0Controller } from './api/v0.controller';
import { HiringManagerService } from './hiring-manager.service';

@Module({
  controllers: [HiringManagerApiV0Controller],
  providers: [HiringManagerService, PrismaService],
})
export class HiringManagerModule {}
