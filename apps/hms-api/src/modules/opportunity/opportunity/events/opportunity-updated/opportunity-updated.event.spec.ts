import { OpportunityUpdatedEvent } from './opportunity-updated.event';

describe('OpportunityUpdatedEvent', () => {
  it('should be defined', () => {
    expect(new OpportunityUpdatedEvent()).toBeDefined();
  });
});
