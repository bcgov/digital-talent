import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../../prisma/prisma.service';
import { GetOpportunitySkillsQuery } from './get-opportunity-skills.query';

@QueryHandler(GetOpportunitySkillsQuery)
export class GetOpportunitySkillsHandler implements IQueryHandler<GetOpportunitySkillsQuery> {
  constructor(private readonly prisma: PrismaService) {}

  async execute({ args: { where, orderBy, take, skip } = {} }: GetOpportunitySkillsQuery): Promise<any> {
    return this.prisma.opportunitySkill.findMany({
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
