import { OpportunityCreatedEvent } from './opportunity-created.event';

describe('OpportunityCreatedEvent', () => {
  it('should be defined', () => {
    expect(new OpportunityCreatedEvent()).toBeDefined();
  });
});
