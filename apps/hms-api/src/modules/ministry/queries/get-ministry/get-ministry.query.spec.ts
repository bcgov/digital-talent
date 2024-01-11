import { GetMinistryQuery } from './get-ministry.query';

describe('GetMinistryQuery', () => {
  it('should be defined', () => {
    expect(new GetMinistryQuery('id')).toBeDefined();
  });
});
