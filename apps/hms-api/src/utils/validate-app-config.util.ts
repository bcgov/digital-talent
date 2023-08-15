import { AppConfigDto } from '../dtos/app-config.dto';
import { validateObject } from './validate-object.dto';

export const validateAppConfig = (config: Record<string, unknown>) => {
  return validateObject(config, AppConfigDto);
};
