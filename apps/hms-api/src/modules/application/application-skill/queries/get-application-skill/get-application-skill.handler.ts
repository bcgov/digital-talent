import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { PrismaService } from '../../../../prisma/prisma.service';
import { GetApplicationSkillQuery } from './get-application-skill.query';

@QueryHandler(GetApplicationSkillQuery)
export class GetApplicationSkillHandler implements IQueryHandler<GetApplicationSkillQuery> {
  constructor(private readonly prisma: PrismaService) {}

  async execute({ application_id, skill_id }: GetApplicationSkillQuery): Promise<any> {
    return this.prisma.applicationSkill.findUnique({
      where: { application_id_skill_id: { application_id, skill_id } },
    });
  }
}
