import { Module } from '@nestjs/common';
import { PrismaService } from '../services/prisma/prisma.service';
import { CandidateService } from './candidate.service';

@Module({
  providers: [CandidateService, PrismaService],
})
export class CandidateModule {}
