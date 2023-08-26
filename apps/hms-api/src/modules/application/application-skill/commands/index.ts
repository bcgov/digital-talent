import { CreateApplicationSkillHandler } from './create-application-skill/create-application-skill.handler';
import { DeleteApplicationSkillHandler } from './delete-application-skill/delete-application-skill.handler';
import { UpdateApplicationSkillHandler } from './update-application-skill/update-application-skill.handler';

export const ApplicationSkillCommandHandlers = [
  CreateApplicationSkillHandler,
  UpdateApplicationSkillHandler,
  DeleteApplicationSkillHandler,
];
