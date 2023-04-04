/* eslint-disable no-console */
import { Injectable } from '@nestjs/common';
import { SkillCategory } from '@prisma/client';
import { PrismaService } from '../services/prisma/prisma.service';

export interface PicklistOption {
  label: string;
  value: string;
}

export interface GroupedPicklist extends PicklistOption {
  options: PicklistOption[];
}

export type PicklistType = PicklistOption[] | GroupedPicklist[];

@Injectable()
export class PicklistService {
  constructor(private readonly prismaService: PrismaService) {}

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

    const picklist: PicklistType = data.map(({ id, name }) => ({ label: name, value: id }));

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

    const picklist: PicklistType = data.map(({ id, name }) => ({ label: name, value: id }));

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

    const picklist: PicklistType = data.map(({ id, name }) => ({ label: name, value: id }));

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

  async findUsersPicklist(filter: Record<string, any>): Promise<[number, GroupedPicklist[]]> {
    const [count, data] = await this.prismaService.$transaction([
      this.prismaService.user.count(),
      this.prismaService.user.findMany({
        select: { id: true, name: true, roles: true },
        orderBy: [
          {
            name: 'asc',
          },
        ],
        where: {
          ...(filter.roles?.$in && { roles: { hasSome: filter.roles?.$in } }),
        },
      }),
    ]);

    const roles = filter.roles?.$in ?? ['admin', 'dtad-team', 'user'];

    const picklist = roles.map((role) => ({
      label: role
        .split('-')
        .map((word) => `${word[0].toUpperCase()}${word.substring(1).toLowerCase()}`)
        .join(' '),
      value: role,
      options: data.filter((d) => d.roles.includes(role)).map(({ id, name }) => ({ label: name, value: id })),
    }));

    return [count, picklist];
  }
}
