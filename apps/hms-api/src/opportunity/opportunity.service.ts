import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../services/prisma/prisma.service';
import { CreateOpportunityDto } from './dto/create-opportunity.dto';
import { UpdateOpportunityDto } from './dto/update-opportunity.dto';

@Injectable()
export class OpportunityService {
  constructor(private readonly prisma: PrismaService) {}

  async create({ candidate_ids, location_ids, required_skill_ids, optional_skill_ids, ...data }: CreateOpportunityDto) {
    const { candidates, locations, skills, ...restOpportunity } = await this.prisma.opportunity.create({
      data: {
        ...data,
        ...(candidate_ids && {
          candidates: {
            createMany: {
              data: candidate_ids.map((id) => ({ candidate_id: id })),
            },
          },
        }),
        ...(location_ids && {
          locations: {
            createMany: {
              data: location_ids.map((id) => ({ location_id: id })),
            },
          },
        }),
        ...((required_skill_ids || optional_skill_ids) && {
          skills: {
            createMany: {
              data: [
                ...required_skill_ids.map((id) => ({ skill_id: id, is_mandatory: true })),
                ...optional_skill_ids.map((id) => ({ skill_id: id, is_mandatory: false })),
              ],
            },
          },
        }),
      },
      include: {
        candidates: {
          select: {
            candidate_id: true,
          },
        },
        locations: {
          select: {
            location_id: true,
          },
        },
        skills: {
          select: {
            skill_id: true,
            is_mandatory: true,
          },
        },
      },
    });

    return {
      ...restOpportunity,
      candidate_ids: candidates.map((c) => c.candidate_id),
      location_ids: locations.map((l) => l.location_id),
      required_skill_ids: skills.filter((s) => s.is_mandatory === true).map((s) => s.skill_id),
      optional_skill_ids: skills.filter((s) => s.is_mandatory === false).map((s) => s.skill_id),
    };
  }

  async findAll() {
    const [opportunities, count] = await this.prisma.$transaction([
      this.prisma.opportunity.findMany({
        include: {
          candidates: {
            select: {
              candidate_id: true,
            },
          },
          locations: {
            select: {
              location_id: true,
            },
          },
          skills: {
            select: {
              skill_id: true,
              is_mandatory: true,
            },
          },
        },
      }),
      this.prisma.opportunity.count(),
    ]);

    return [
      opportunities.map(({ candidates, locations, skills, ...restOpportunity }) => ({
        ...restOpportunity,
        candidate_ids: candidates.map((c) => c.candidate_id),
        location_ids: locations.map((l) => l.location_id),
        required_skill_ids: skills.filter((s) => s.is_mandatory === true).map((s) => s.skill_id),
        optional_skill_ids: skills.filter((s) => s.is_mandatory === false).map((s) => s.skill_id),
      })),
      count,
    ];
  }

  async findOne(id: string) {
    const opportunity = await this.prisma.opportunity.findUnique({
      where: { id },
      include: {
        candidates: {
          select: {
            candidate_id: true,
          },
        },
        locations: {
          select: {
            location_id: true,
          },
        },
        skills: {
          select: {
            skill_id: true,
            is_mandatory: true,
          },
        },
      },
    });
    if (!opportunity) throw new NotFoundException();
    const { candidates, locations, skills, ...restOpportunity } = opportunity;

    return {
      ...restOpportunity,
      candidate_ids: candidates.map((c) => c.candidate_id),
      location_ids: locations.map((l) => l.location_id),
      required_skill_ids: skills.filter((s) => s.is_mandatory === true).map((s) => s.skill_id),
      optional_skill_ids: skills.filter((s) => s.is_mandatory === false).map((s) => s.skill_id),
    };
  }

  async update(
    id: string,
    { candidate_ids, location_ids, optional_skill_ids, required_skill_ids, ...data }: UpdateOpportunityDto,
  ) {
    await this.findOne(id);

    const { candidates, locations, skills, ...restOpportunity } = await this.prisma.opportunity.update({
      where: { id },
      data: {
        ...data,
        ...(candidate_ids && {
          candidates: {
            createMany: {
              data: candidate_ids.map((id) => ({ candidate_id: id })),
            },
          },
        }),
        ...(location_ids && {
          locations: {
            createMany: {
              data: location_ids.map((id) => ({ location_id: id })),
            },
          },
        }),
        ...((required_skill_ids || optional_skill_ids) && {
          skills: {
            createMany: {
              data: [
                ...required_skill_ids.map((id) => ({ skill_id: id, is_mandatory: true })),
                ...optional_skill_ids.map((id) => ({ skill_id: id, is_mandatory: false })),
              ],
            },
          },
        }),
      },
      include: {
        candidates: {
          select: {
            candidate_id: true,
          },
        },
        locations: {
          select: {
            location_id: true,
          },
        },
        skills: {
          select: {
            skill_id: true,
            is_mandatory: true,
          },
        },
      },
    });

    return {
      ...restOpportunity,
      candidate_ids: candidates.map((c) => c.candidate_id),
      location_ids: locations.map((l) => l.location_id),
      required_skill_ids: skills.filter((s) => s.is_mandatory === true).map((s) => s.skill_id),
      optional_skill_ids: skills.filter((s) => s.is_mandatory === false).map((s) => s.skill_id),
    };
  }

  remove(id: string) {
    return `This action removes a #${id} opportunity`;
  }
}
