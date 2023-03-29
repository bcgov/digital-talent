import { Module } from '@nestjs/common';
import { CandidateService } from '../../candidate/candidate.service';
import { PicklistService } from '../../picklist/picklist.service';
import { PrismaService } from '../../services/prisma/prisma.service';
import { CandidateController } from './candidate.controller';
import { PicklistController } from './picklist.controller';

@Module({
  controllers: [CandidateController, PicklistController],
  providers: [CandidateService, PicklistService, PrismaService],
})
export class ApiV0Module {}
