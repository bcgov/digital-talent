import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../../prisma/prisma.service';
import { GetOpportunitySkillQuery } from './get-opportunity-skill.query';

@QueryHandler(GetOpportunitySkillQuery)
export class GetOpportunitySkillHandler implements IQueryHandler<GetOpportunitySkillQuery> {
  constructor(private readonly prisma: PrismaService) {}

  async execute({ opportunity_id, skill_id }: GetOpportunitySkillQuery): Promise<any> {
    return this.prisma.opportunitySkill.findUnique({
      where: {
        opportunity_id_skill_id: {
          opportunity_id,
          skill_id,
        },
      },
    });
  }
}
