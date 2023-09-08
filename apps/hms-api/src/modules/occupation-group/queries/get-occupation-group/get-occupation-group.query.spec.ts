import { GetOccupationGroupQuery } from './get-occupation-group.query';

describe('GetOccupationGroupQuery', () => {
  it('should be defined', () => {
    expect(new GetOccupationGroupQuery('id')).toBeDefined();
  });
});
