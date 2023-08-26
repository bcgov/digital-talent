import { CreateSkillHandler } from './create-skill/create-skill.handler';
import { DeleteSkillHandler } from './delete-skill/delete-skill.handler';
import { UpdateSkillHandler } from './update-skill/update-skill.handler';

export const SkillCommandHandlers = [CreateSkillHandler, UpdateSkillHandler, DeleteSkillHandler];
