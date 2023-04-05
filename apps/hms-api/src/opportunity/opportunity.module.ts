import { Module } from '@nestjs/common';
import { PrismaService } from '../services/prisma/prisma.service';
import { OpportunityApiV0Controller } from './api/v0.controller';
import { OpportunityService } from './opportunity.service';

@Module({
  controllers: [OpportunityApiV0Controller],
  providers: [OpportunityService, PrismaService],
})
export class OpportunityModule {}
