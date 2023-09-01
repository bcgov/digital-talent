import { CreateOpportunityHandler } from './create-opportunity/create-opportunity.handler';
import { DeleteOpportunityHandler } from './delete-opportunity/delete-opportunity.handler';
import { UpdateOpportunityHandler } from './update-opportunity/update-opportunity.handler';

export const OpportunityCommandHandlers = [
  CreateOpportunityHandler,
  UpdateOpportunityHandler,
  DeleteOpportunityHandler,
];
