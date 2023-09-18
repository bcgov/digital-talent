import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../prisma/prisma.service';
import { GetSkillQuery } from './get-skill.query';

@QueryHandler(GetSkillQuery)
export class GetSkillHandler implements IQueryHandler<GetSkillQuery> {
  constructor(private readonly prisma: PrismaService) {}

  async execute(query: GetSkillQuery): Promise<any> {
    return this.prisma.skill.findUnique({ where: { id: query.id } });
  }
}
