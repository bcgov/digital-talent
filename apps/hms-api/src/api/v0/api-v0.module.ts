import { Module } from '@nestjs/common';
import { CandidateService } from '../../candidate/candidate.service';
import { PrismaService } from '../../services/prisma/prisma.service';
import { CandidateController } from './candidate.controller';

@Module({
  controllers: [CandidateController],
  providers: [CandidateService, PrismaService],
})
export class ApiV0Module {}
