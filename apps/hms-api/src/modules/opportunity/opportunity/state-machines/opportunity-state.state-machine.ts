import { createMachine } from 'xstate';

export const opportunityStateMachine = createMachine({
  id: 'Opportunity State Machine',
  initial: 'SUBMITTED',
  predictableActionArguments: true,
  preserveActionOrder: true,
  states: {
    SUBMITTED: {
      on: {
        APPROVED: 'APPROVED',
        REJECTED: 'REJECTED',
      },
    },
    APPROVED: {
      on: {},
    },
    REJECTED: {
      on: {},
    },
  },
});
