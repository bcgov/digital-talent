import { OpportunityDeletedEvent } from './opportunity-deleted.event';

describe('OpportunityDeletedEvent', () => {
  it('should be defined', () => {
    expect(new OpportunityDeletedEvent()).toBeDefined();
  });
});
