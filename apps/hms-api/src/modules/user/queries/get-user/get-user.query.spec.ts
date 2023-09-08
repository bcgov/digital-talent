import { GetUserQuery } from './get-user.query';

describe('GetUserQuery', () => {
  it('should be defined', () => {
    expect(new GetUserQuery('id')).toBeDefined();
  });
});
