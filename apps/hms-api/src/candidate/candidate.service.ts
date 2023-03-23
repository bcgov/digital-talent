import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
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

      return candidate;
    } catch (e) {
      throw new BadRequestException();
    }
  }

  async getCandidates() {
    const candidatesWithCount = this.prisma.$transaction([
      this.prisma.candidate.count(),
      this.prisma.candidate.findMany(),
    ]);

    return candidatesWithCount;
  }

  async updateCandidate(id: string, data: UpdateCandidateDto) {
    await this.getCandidate(id);

    const candidate = await this.prisma.candidate.update({
      where: {
        id,
      },
      data,
    });

    return candidate;
  }

  async getCandidate(id: string) {
    const candidate = await this.prisma.candidate.findUnique({ where: { id } });
    if (!candidate) throw new NotFoundException();

    return candidate;
  }

  async deleteCandidate(id: string) {
    await this.getCandidate(id);
    await this.prisma.candidate.delete({ where: { id } });
  }
}
