/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, NotFoundException } from '@nestjs/common';
import { ApiPagedResponseDto } from '../dtos/api-paged-response.dto';
import { ApiResponseDto } from '../dtos/api-response.dto';
import { PageMetaDto } from '../dtos/page-meta.dto';
import { PrismaService } from '../services/prisma/prisma.service';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { UpdateCandidateDto } from './dto/update-candidate.dto';
import { CandidateEntity } from './entities/candidate.entity';

@Injectable()
export class CandidateService {
  constructor(private readonly prisma: PrismaService) {}

  async create({ location_ids, skill_ids, ...data }: CreateCandidateDto) {
    const { locations, skills, ...restCandidate } = await this.prisma.candidate.create({
      data: {
        ...data,
        ...(location_ids && {
          locations: {
            createMany: {
              data: (location_ids ?? []).map((location_id) => ({ location_id, rank: 0 })),
            },
          },
        }),
        ...(skill_ids && {
          skills: {
            createMany: {
              data: (skill_ids ?? []).map((skill_id) => ({ skill_id })),
            },
          },
        }),
      },
      include: {
        locations: {
          select: {
            location_id: true,
          },
        },
        skills: {
          select: {
            skill_id: true,
          },
        },
      },
    });

    return new ApiResponseDto<CandidateEntity>({
      ...restCandidate,
      location_ids: locations.map((l) => l.location_id),
      skill_ids: skills.map((s) => s.skill_id),
    });
  }

  async findAll() {
    const [candidates, count] = await this.prisma.$transaction([
      this.prisma.candidate.findMany({
        include: {
          locations: {
            select: {
              location_id: true,
            },
          },
          skills: {
            select: {
              skill_id: true,
            },
          },
        },
      }),
      this.prisma.candidate.count(),
    ]);

    return new ApiPagedResponseDto<CandidateEntity>(
      candidates.map(({ locations, skills, ...restCandidate }) => ({
        ...restCandidate,
        location_ids: locations.map((l) => l.location_id),
        skill_ids: skills.map((s) => s.skill_id),
      })),
      new PageMetaDto({ itemCount: count, options: {} }),
    );
  }

  async findOne(id: string) {
    const candidate = await this.prisma.candidate.findUnique({
      where: { id },
      include: { locations: { select: { location_id: true } }, skills: { select: { skill_id: true } } },
    });
    if (!candidate) throw new NotFoundException();
    const { locations, skills, ...restCandidate } = candidate;

    return new ApiResponseDto<CandidateEntity>({
      ...restCandidate,
      location_ids: locations.map((l) => l.location_id),
      skill_ids: skills.map((s) => s.skill_id),
    });
  }

  async update(id: string, { location_ids, skill_ids, ...data }: UpdateCandidateDto) {
    await this.findOne(id);

    const candidate = await this.prisma.candidate.update({
      where: { id },
      data: {
        ...data,
        ...(location_ids && {
          locations: {
            deleteMany: {},
            createMany: {
              data: (location_ids ?? []).map((location_id) => ({ location_id, rank: 0 })),
            },
          },
        }),
        ...(skill_ids && {
          skills: {
            deleteMany: {},
            createMany: {
              data: (skill_ids ?? []).map((skill_id) => ({ skill_id })),
            },
          },
        }),
      },
      include: {
        locations: {
          select: {
            location_id: true,
          },
        },
        skills: {
          select: {
            skill_id: true,
          },
        },
      },
    });

    const { locations, skills, ...restCandidate } = candidate;

    return new ApiResponseDto<CandidateEntity>({
      ...restCandidate,
      location_ids: locations.map((l) => l.location_id),
      skill_ids: skills.map((s) => s.skill_id),
    });
  }

  remove(id: string) {
    return `This action removes a #${id} candidate`;
  }
}
