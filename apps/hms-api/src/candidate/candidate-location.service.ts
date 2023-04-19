/* eslint-disable no-console */
import { Injectable } from '@nestjs/common';
import { Location } from '@prisma/client';
import { ApiPagedResponseDto } from '../dtos/api-paged-response.dto';
import { PageMetaDto } from '../dtos/page-meta.dto';
import { PrismaService } from '../services/prisma/prisma.service';
import { UpdateCandidateLocationDto } from './dto/update-candidate-location.dto';

@Injectable()
export class CandidateLocationService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(id: string) {
    const resultsWithCount = await this.prisma.$transaction([
      this.prisma.candidateLocation.findMany({ where: { candidate_id: id }, include: { location: true } }),
      this.prisma.candidateLocation.count({ where: { candidate_id: id } }),
    ]);

    return new ApiPagedResponseDto<Location>(
      resultsWithCount[0].map((r) => ({ ...r.location })),
      new PageMetaDto({ itemCount: resultsWithCount[1], options: {} }),
    );
  }

  async update(id: string, data: UpdateCandidateLocationDto[]) {
    const flatData = data.map((d) => d.location_id);

    await this.prisma.$transaction([
      this.prisma.candidateLocation.deleteMany({
        where: { candidate_id: id },
      }),
      this.prisma.candidateLocation.createMany({
        data: flatData.map((s) => ({ candidate_id: id, rank: 0, location_id: s })),
      }),
    ]);

    return this.findAll(id);
  }
}
