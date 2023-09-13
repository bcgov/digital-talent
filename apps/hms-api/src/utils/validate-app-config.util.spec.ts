import { validateObject } from './validate-object.dto';
import { AppConfigDto } from '../dtos/app-config.dto';
import { validateAppConfig } from './validate-app-config.util';

// Mocking the validateObject function
jest.mock('./validate-object.dto', () => ({
  validateObject: jest.fn(),
}));

describe('validateAppConfig', () => {
  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    (validateObject as jest.Mock).mockClear();
  });

  it('should call validateObject with config and AppConfigDto', () => {
    const mockConfig = { key: 'value' }; // mock a config here, as you see fit
    validateAppConfig(mockConfig);
    expect(validateObject).toHaveBeenCalledWith(mockConfig, AppConfigDto);
  });

  it('should return the result of validateObject', () => {
    (validateObject as jest.Mock).mockReturnValueOnce(true); // mock a return value

    const mockConfig = { key: 'value' };
    const result = validateAppConfig(mockConfig);
    expect(result).toBe(true);
  });
});
