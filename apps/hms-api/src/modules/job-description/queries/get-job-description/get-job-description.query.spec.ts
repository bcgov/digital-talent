import { GetJobDescriptionQuery } from './get-job-description.query';

describe('GetJobDescriptionQuery', () => {
  it('should be defined', () => {
    expect(new GetJobDescriptionQuery('id')).toBeDefined();
  });
});
