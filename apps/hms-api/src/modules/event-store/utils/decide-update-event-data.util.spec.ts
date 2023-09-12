import {
  decideUpdateEventData,
  extractIdentifiersFromCommandData,
  processJsonFields,
} from './decide-update-event-data.util';

describe('decideUpdateEventData', () => {
  it('should call processJsonFields', () => {
    const command = { data: { id: 1, name: 'Alice' } };
    const state = { exists: true, data: { id: 1, name: 'Alice' } } as any;
    const mockProcessJsonFieldsFunc = jest.fn();
    decideUpdateEventData(command, state, mockProcessJsonFieldsFunc);

    expect(mockProcessJsonFieldsFunc).toHaveBeenCalled();
  });

  it('should return command.data if state.exists is false', () => {
    const command = { data: { id: 1, name: 'Alice' } };
    const state = { exists: false, data: {} } as any;
    expect(decideUpdateEventData(command, state)).toEqual(command.data);
  });

  it("should return null if there's no difference between state.data and command.data", () => {
    const command = { data: { id: 1, name: 'Alice' } };
    const state = { exists: true, data: { id: 1, name: 'Alice' } } as any;
    expect(decideUpdateEventData(command, state)).toBeNull();
  });

  it('should return differences combined with primary keys', () => {
    const command = { data: { id: 1, name: 'Bob' } };
    const state = { exists: true, data: { id: 1, name: 'Alice' } } as any;
    expect(decideUpdateEventData(command, state)).toEqual({ id: 1, name: 'Bob' });
  });

  it('should ignore extra fields in state.data', () => {
    const command = { data: { id: 1 } };
    const state = { exists: true, data: { id: 1, name: 'Alice' } } as any;
    expect(decideUpdateEventData(command, state)).toBeNull();
  });

  it('should detect differences in nested fields', () => {
    const command = { data: { id: 1, details: { age: 25 } } };
    const state = { exists: true, data: { id: 1, details: { age: 24 } } } as any;
    expect(decideUpdateEventData(command, state)).toEqual({ id: 1, details: { age: 25 } });
  });

  it('should detect array differences', () => {
    const command = { data: { id: 1, arrayField: [1, 2, 3] } };
    const state = { exists: true, data: { id: 1, arrayField: [1, 2] } } as any;
    expect(decideUpdateEventData(command, state)).toEqual({ id: 1, arrayField: [1, 2, 3] });
  });

  it('should detect date differences', () => {
    const command = { data: { id: 1, dateField: new Date('2023-01-01') } };
    const state = { exists: true, data: { id: 1, dateField: new Date('2022-01-01') } } as any;
    expect(decideUpdateEventData(command, state)).toEqual({ id: 1, dateField: new Date('2023-01-01') });
  });
});

describe('extractIdentifiersFromCommandData', () => {
  it('should extract primary keys from a record', () => {
    const data = {
      id: 1,
      foo_id: 2,
      name: 'Alice',
      bar_id: 3,
      description: 'Sample',
    };
    const expected = {
      id: 1,
      foo_id: 2,
      bar_id: 3,
    };
    expect(extractIdentifiersFromCommandData(data)).toEqual(expected);
  });

  it('should return an empty object if no primary keys are found', () => {
    const data = {
      name: 'Alice',
      description: 'Sample',
    };
    const expected = {};
    expect(extractIdentifiersFromCommandData(data)).toEqual(expected);
  });

  it('should return the entire object if all keys are primary', () => {
    const data = {
      id: 1,
      foo_id: 2,
      bar_id: 3,
    };
    const expected = {
      id: 1,
      foo_id: 2,
      bar_id: 3,
    };
    expect(extractIdentifiersFromCommandData(data)).toEqual(expected);
  });

  it("should not return keys containing 'id' in the middle", () => {
    const data = {
      idName: 'value',
      nameid: 'value',
      nameidname: 'value',
    };
    const expected = {};
    expect(extractIdentifiersFromCommandData(data)).toEqual(expected);
  });

  it("should return keys that are just 'id'", () => {
    const data = {
      id: 1,
    };
    const expected = {
      id: 1,
    };
    expect(extractIdentifiersFromCommandData(data)).toEqual(expected);
  });

  it('should handle empty input data', () => {
    const data = {};
    const expected = {};
    expect(extractIdentifiersFromCommandData(data)).toEqual(expected);
  });

  it("should be case-sensitive and only match lowercase 'id'", () => {
    const data = {
      ID: 1,
      foo_Id: 2,
    };
    const expected = {};
    expect(extractIdentifiersFromCommandData(data)).toEqual(expected);
  });
});

describe('processJsonFields', () => {
  it('should return early if state.exists is false', () => {
    const command = { data: { id: 1, someField: { foo: 'bar' } } };
    const state = { exists: false, data: {} } as any;
    const delta: any = {};

    processJsonFields(command, state, delta);

    expect(delta).toEqual({});
  });

  it('should overwrite delta with command JSON-like field if they differ', () => {
    const command = { data: { id: 1, jsonField: { foo: 'new' } } };
    const state = { exists: true, data: { jsonField: { foo: 'old' } } } as any;
    const delta: any = {};

    processJsonFields(command, state, delta);

    expect(delta).toEqual({ jsonField: { foo: 'new' } });
  });

  it('should not modify delta if JSON-like fields are the same', () => {
    const command = { data: { id: 1, jsonField: { foo: 'same' } } };
    const state = { exists: true, data: { jsonField: { foo: 'same' } } } as any;
    const delta: any = {};

    processJsonFields(command, state, delta);

    expect(delta).toEqual({});
  });

  it('should not modify delta for non-object fields', () => {
    const command = { data: { id: 1, stringField: 'value', numberField: 42 } };
    const state = { exists: true, data: { stringField: 'oldValue', numberField: 24 } } as any;
    const delta: any = {};

    processJsonFields(command, state, delta);

    expect(delta).toEqual({});
  });

  it('should not add to delta if command has a JSON-like field not in state', () => {
    const command = { data: { id: 1, jsonField: { foo: 'bar' } } };
    const state = { exists: true, data: {} } as any;
    const delta: any = {};

    processJsonFields(command, state, delta);

    expect(delta).toEqual({});
  });

  it('should handle nested objects correctly', () => {
    const command = {
      data: { id: 1, nestedField: { first: { second: 'new' } } },
    };
    const state = {
      exists: true,
      data: { nestedField: { first: { second: 'old' } } },
    } as any;
    const delta: any = {};

    processJsonFields(command, state, delta);

    expect(delta).toEqual({ nestedField: { first: { second: 'new' } } });
  });

  it('should not treat null values or arrays as JSON-like fields', () => {
    const command = { data: { id: 1, nullField: null, arrayField: [1, 2, 3] } };
    const state = { exists: true, data: { nullField: null, arrayField: [4, 5, 6] } } as any;
    const delta: any = {};

    processJsonFields(command, state, delta);

    expect(delta).toEqual({});
  });
});
