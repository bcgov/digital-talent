import { OpportunityStateUpdatedEvent } from './opportunity-state-updated.event';

describe('OpportunityStateUpdatedEvent', () => {
  it('should be defined', () => {
    expect(new OpportunityStateUpdatedEvent()).toBeDefined();
  });
});
