import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../services/prisma/prisma.service';
import { CreateHiringManagerDto } from './dto/create-hiring-manager.dto';
import { UpdateHiringManagerDto } from './dto/update-hiring-manager.dto';

@Injectable()
export class HiringManagerService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createHiringManagerDto: CreateHiringManagerDto) {
    const hiringManager = await this.prisma.hiringManager.create({
      data: createHiringManagerDto,
    });

    return hiringManager;
  }

  async findAll() {
    const data = await this.prisma.$transaction([
      this.prisma.hiringManager.findMany(),
      this.prisma.hiringManager.count(),
    ]);

    return data;
  }

  async findOne(id: string) {
    const hiringManager = await this.prisma.hiringManager.findUnique({
      where: { id },
    });
    if (!hiringManager) throw new NotFoundException();

    return hiringManager;
  }

  async update(id: string, updateHiringManagerDto: UpdateHiringManagerDto) {
    await this.findOne(id);

    const hiringManager = await this.prisma.hiringManager.update({
      where: { id },
      data: updateHiringManagerDto,
    });

    return hiringManager;
  }

  remove(id: string) {
    return `This action removes a #${id} hiringManager`;
  }
}
