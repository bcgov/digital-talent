/* eslint-disable no-console */
import { Injectable, NotFoundException } from '@nestjs/common';
import { SkillCategory } from '@prisma/client';
import { PrismaService } from '../services/prisma/prisma.service';

export interface PicklistOption {
  label: string;
  value: string;
}

export interface GroupedPicklist extends PicklistOption {
  options: PicklistOption[];
}

export type Picklist = PicklistOption[] | GroupedPicklist[];

export type PicklistScope = 'digital-talent-roles' | 'locations' | 'ministries' | 'skills';

@Injectable()
export class PicklistService {
  constructor(private readonly prismaService: PrismaService) {}

  scopes: PicklistScope[] = ['digital-talent-roles', 'locations', 'ministries', 'skills'];

  findOne(id: PicklistScope) {
    switch (id) {
      case 'digital-talent-roles': {
        return this.findDigitalTalentRolePicklist();
      }
      case 'locations': {
        return this.findLocationPicklist();
      }
      case 'ministries': {
        return this.findMinistriesPicklist();
      }
      case 'skills': {
        return this.findSkillsPicklist();
      }
      default: {
        throw new NotFoundException();
      }
    }
  }

  async findDigitalTalentRolePicklist(): Promise<[number, PicklistOption[]]> {
    const [count, data] = await this.prismaService.$transaction([
      this.prismaService.digitalTalentRole.count(),
      this.prismaService.digitalTalentRole.findMany({
        select: { id: true, name: true },
        orderBy: [
          {
            name: 'asc',
          },
        ],
      }),
    ]);

    const picklist: Picklist = data.map(({ id, name }) => ({ label: name, value: id }));

    return [count, picklist];
  }

  async findLocationPicklist(): Promise<[number, PicklistOption[]]> {
    const [count, data] = await this.prismaService.$transaction([
      this.prismaService.location.count(),
      this.prismaService.location.findMany({
        select: { id: true, name: true },
        orderBy: [
          {
            name: 'asc',
          },
        ],
      }),
    ]);

    const picklist: Picklist = data.map(({ id, name }) => ({ label: name, value: id }));

    return [count, picklist];
  }

  async findMinistriesPicklist(): Promise<[number, PicklistOption[]]> {
    const [count, data] = await this.prismaService.$transaction([
      this.prismaService.ministry.count(),
      this.prismaService.ministry.findMany({
        select: { id: true, name: true },
        orderBy: [
          {
            name: 'asc',
          },
        ],
      }),
    ]);

    const picklist: Picklist = data.map(({ id, name }) => ({ label: name, value: id }));

    return [count, picklist];
  }

  async findSkillsPicklist(): Promise<[number, GroupedPicklist[]]> {
    const [count, data] = await this.prismaService.$transaction([
      this.prismaService.skill.count(),
      this.prismaService.skill.findMany({
        select: { id: true, name: true, category: true, num_years_experience: true },
        orderBy: [
          {
            category: 'asc',
          },
          {
            name: 'asc',
          },
          {
            num_years_experience: 'asc',
          },
        ],
      }),
    ]);

    const skillCategories: SkillCategory[] = [
      'CLOUD_PLATFORMS',
      'CONCEPTS',
      'DATABASES',
      'FRAMEWORKS_AND_TECHNOLOGIES',
      'OPERATING_SYSTEMS',
      'PROGRAMMING_LANGUAGES',
      'TOOLS',
    ];

    const picklist = skillCategories.map((category) => ({
      label: category
        .split('_')
        .map((word) => `${word[0].toUpperCase()}${word.substring(1).toLowerCase()}`)
        .join(' '),
      value: category,
      options: data
        .filter((d) => d.category === category)
        .map(({ id, name, num_years_experience }) => ({
          label: `${name} (${num_years_experience}+ years)`,
          value: id,
        })),
    })) as GroupedPicklist[];

    return [count, picklist];
  }
}
