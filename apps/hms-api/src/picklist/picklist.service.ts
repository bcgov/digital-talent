import { Injectable, NotFoundException } from '@nestjs/common';
import { ApiPagedResponseDto } from '../dtos/api-paged-response.dto';
import { PageMetaDto } from '../dtos/page-meta.dto';
import { PrismaService } from '../services/prisma/prisma.service';

enum ContextMapKeys {
  'digital-talent-roles' = 'digital-talent-roles',
  locations = 'locations',
  ministries = 'ministries',
}

interface ContextMapValues {
  name: string;
  select: Record<string, boolean>;
  mapFields: Record<string, string>;
  orderBy: Record<string, 'asc' | 'desc'>[];
}

type ContextMap = {
  [key in ContextMapKeys]: ContextMapValues;
};

@Injectable()
export class PicklistService {
  constructor(private readonly prismaService: PrismaService) {}

  private contextMap: ContextMap = {
    'digital-talent-roles': {
      name: 'digitalTalentRole',
      select: { id: true, name: true },
      mapFields: { label: 'name', value: 'id' },
      orderBy: [
        {
          name: 'asc',
        },
      ],
    },
    locations: {
      name: 'location',
      select: { id: true, name: true },
      mapFields: { label: 'name', value: 'id' },
      orderBy: [
        {
          name: 'asc',
        },
      ],
    },
    ministries: {
      name: 'ministry',
      select: { id: true, name: true },
      mapFields: { label: 'name', value: 'id' },
      orderBy: [
        {
          name: 'asc',
        },
      ],
    },
  };

  async getPicklist(context: string) {
    if (!Object.keys(this.contextMap).includes(context)) {
      throw new NotFoundException();
    }

    const scope: ContextMapValues = this.contextMap[context];

    const [count, data] = await this.prismaService.$transaction([
      this.prismaService[scope.name].count(),
      this.prismaService[scope.name].findMany({
        select: scope.select,
        orderBy: scope.orderBy,
      }),
    ]);

    const mappedData = data.map((d) => ({ label: d[scope.mapFields.label], value: d[scope.mapFields.value] }));

    return new ApiPagedResponseDto(mappedData, new PageMetaDto({ itemCount: count, options: {} }));
  }
}
