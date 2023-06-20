import { plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';
import { AppConfigDto } from '../dtos/app-config.dto';

export const validateAppConfig = (config: Record<string, unknown>) => {
  const validatedConfig = plainToInstance(AppConfigDto, config, { enableImplicitConversion: true });
  const errors = validateSync(validatedConfig, { skipMissingProperties: false, whitelist: true });
  if (errors.length > 0) throw new Error(errors.toString());

  return validatedConfig;
};
