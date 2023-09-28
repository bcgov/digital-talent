import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../../prisma/prisma.service';
import { GetApplicationSkillsQuery } from './get-application-skills.query';

@QueryHandler(GetApplicationSkillsQuery)
export class GetApplicationSkillsHandler implements IQueryHandler<GetApplicationSkillsQuery> {
  constructor(private readonly prisma: PrismaService) {}

  async execute({ args: { where, orderBy, take, skip } = {} }: GetApplicationSkillsQuery): Promise<any> {
    return this.prisma.applicationSkill.findMany({
      where: {
        deleted_at: null,
        ...where,
      },
      orderBy,
      take,
      skip,
    });
  }
}
