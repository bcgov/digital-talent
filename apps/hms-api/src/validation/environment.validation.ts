import { plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';
import { EnvironmentDto } from '../dtos/environment.dto';

export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToInstance(EnvironmentDto, config, { enableImplicitConversion: true });
  const errors = validateSync(validatedConfig, { skipMissingProperties: false });
  // asdf
  if (errors.length > 0) throw new Error(errors.toString());

  return validatedConfig;
}
