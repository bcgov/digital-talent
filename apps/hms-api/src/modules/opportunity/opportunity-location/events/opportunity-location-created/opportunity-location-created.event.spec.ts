import { OpportunityLocationCreatedEvent } from './opportunity-location-created.event';

describe('OpportunityLocationCreatedEvent', () => {
  it('should be defined', () => {
    expect(new OpportunityLocationCreatedEvent()).toBeDefined();
  });
});
