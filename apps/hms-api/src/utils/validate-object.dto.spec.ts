import 'reflect-metadata';
import { IsString, IsNotEmpty } from 'class-validator';
import { validateObject } from './validate-object.dto';

// Sample DTO for testing
class TestDTO {
  @IsString()
  @IsNotEmpty()
  name: string;
}

describe('validateObject', () => {
  it('should validate and transform a valid object', () => {
    const testData = {
      name: 'John',
    };

    const result = validateObject(testData, TestDTO);

    expect(result).toBeInstanceOf(TestDTO);
    expect(result.name).toBe('John');
  });

  it('should do implicit converstion', () => {
    const invalidData = {
      name: 1234,
    };

    expect(() => {
      validateObject(invalidData, TestDTO);
    }).not.toThrowError();
  });

  it('should not throw an error for object type todo: is this weird, maybe should fail instead?', () => {
    const nonConvertibleData = {
      name: {},
    };

    expect(() => {
      validateObject(nonConvertibleData, TestDTO);
    }).not.toThrowError();
  });

  it('should throw an error for non-convertible invalid data', () => {
    const nonConvertibleData = {
      name: [1, 2, 3],
    };

    expect(() => {
      validateObject(nonConvertibleData, TestDTO);
    }).toThrowError();
  });

  it('should throw an error when a required property is missing', () => {
    const missingData = {};

    expect(() => {
      validateObject(missingData, TestDTO);
    }).toThrowError();
  });
});
