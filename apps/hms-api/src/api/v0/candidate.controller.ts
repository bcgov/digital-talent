import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { CandidateService } from '../../candidate/candidate.service';
import { CreateCandidateDto } from '../../generated/dtos/create-candidate.dto';
import { UpdateCandidateDto } from '../../generated/dtos/update-candidate.dto';
import { PrismaService } from '../../services/prisma/prisma.service';

@Controller({
  version: '0',
  path: 'candidates',
})
export class CandidateController {
  constructor(private readonly candidateService: CandidateService, private readonly prisma: PrismaService) {}

  @Post()
  createCandidate(@Body() data: CreateCandidateDto) {
    return this.candidateService.createCandidate(data);
  }

  @Get()
  async getCandidates() {
    return this.candidateService.getCandidates();
  }

  @Get(':id')
  async getCandidate(@Param('id') id: string) {
    return this.candidateService.getCandidate(id);
  }

  @Patch(':id')
  async updateCandidate(@Param('id') id: string, @Body() data: UpdateCandidateDto) {
    return this.candidateService.updateCandidate(id, data);
  }

  @HttpCode(204)
  @Delete(':id')
  async deleteCandidate(@Param('id') id: string) {
    return this.candidateService.deleteCandidate(id);
  }
}
