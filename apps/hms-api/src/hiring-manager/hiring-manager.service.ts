import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../services/prisma/prisma.service';
import { CreateHiringManagerDto } from './dto/create-hiring-manager.dto';
import { UpdateHiringManagerDto } from './dto/update-hiring-manager.dto';

@Injectable()
export class HiringManagerService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createHiringManagerDto: CreateHiringManagerDto) {
    const { opportunities, ...hiringManager } = await this.prisma.hiringManager.create({
      data: createHiringManagerDto,
      include: {
        opportunities: {
          select: {
            id: true,
          },
        },
      },
    });

    return {
      ...hiringManager,
      opportunity_ids: opportunities.map((o) => o.id),
    };
  }

  async findAll() {
    const [hiringManagers, count] = await this.prisma.$transaction([
      this.prisma.hiringManager.findMany({
        include: {
          opportunities: {
            select: {
              id: true,
            },
          },
        },
      }),
      this.prisma.hiringManager.count(),
    ]);

    return [
      hiringManagers.map(({ opportunities, ...restHiringManager }) => ({
        ...restHiringManager,
        opportunity_ids: opportunities.map((o) => o.id),
      })),
      count,
    ];
  }

  async findOne(id: string) {
    const hiringManager = await this.prisma.hiringManager.findUnique({
      where: { id },
      include: {
        opportunities: {
          select: {
            id: true,
          },
        },
      },
    });
    if (!hiringManager) throw new NotFoundException();
    const { opportunities, ...restHiringManager } = hiringManager;

    return {
      ...restHiringManager,
      opportunity_ids: opportunities.map((o) => o.id),
    };
  }

  async update(id: string, updateHiringManagerDto: UpdateHiringManagerDto) {
    await this.findOne(id);

    const { opportunities, ...hiringManager } = await this.prisma.hiringManager.update({
      where: { id },
      data: updateHiringManagerDto,
      include: {
        opportunities: {
          select: {
            id: true,
          },
        },
      },
    });

    return {
      ...hiringManager,
      opportunity_ids: opportunities.map((o) => o.id),
    };
  }

  remove(id: string) {
    return `This action removes a #${id} hiringManager`;
  }
}
