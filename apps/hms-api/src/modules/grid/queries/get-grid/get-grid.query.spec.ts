import { GetGridQuery } from './get-grid.query';

describe('GetGridQuery', () => {
  it('should be defined', () => {
    expect(new GetGridQuery('id')).toBeDefined();
  });
});
