import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Candidate } from '@prisma/client';
import { ApiPagedResponseDto } from '../dtos/api-paged-response.dto';
import { ApiResponseDto } from '../dtos/api-response.dto';
import { PageMetaDto } from '../dtos/page-meta.dto';
import { CreateCandidateDto } from '../generated/dtos/create-candidate.dto';
import { UpdateCandidateDto } from '../generated/dtos/update-candidate.dto';
import { PrismaService } from '../services/prisma/prisma.service';

@Injectable()
export class CandidateService {
  constructor(private readonly prisma: PrismaService) {}

  async createCandidate(data: CreateCandidateDto) {
    try {
      const candidate = await this.prisma.candidate.create({
        data,
      });

      return new ApiResponseDto<Candidate>(candidate);
    } catch (e) {
      throw new BadRequestException();
    }
  }

  async getCandidates() {
    const candidatesWithCount = await this.prisma.$transaction([
      this.prisma.candidate.count(),
      this.prisma.candidate.findMany(),
    ]);

    return new ApiPagedResponseDto<Candidate>(
      candidatesWithCount[1],
      new PageMetaDto({ itemCount: candidatesWithCount[0], options: {} }),
    );
  }

  async updateCandidate(id: string, data: UpdateCandidateDto) {
    await this.getCandidate(id);

    const candidate = await this.prisma.candidate.update({
      where: {
        id,
      },
      data,
    });

    return new ApiResponseDto<Candidate>(candidate);
  }

  async getCandidate(id: string) {
    const candidate = await this.prisma.candidate.findUnique({ where: { id } });
    if (!candidate) throw new NotFoundException();

    return new ApiResponseDto<Candidate>(candidate);
  }

  async deleteCandidate(id: string) {
    await this.getCandidate(id);
    await this.prisma.candidate.delete({ where: { id } });
  }
}
