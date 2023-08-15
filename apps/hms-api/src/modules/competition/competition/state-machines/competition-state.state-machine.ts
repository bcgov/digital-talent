import { createMachine } from 'xstate';

export const competitionStateStateMachine = createMachine({
  id: 'Competition State Machine',
  initial: 'DRAFT',
  predictableActionArguments: true,
  preserveActionOrder: true,
  states: {
    DRAFT: {
      on: {
        PUBLISHED: 'PUBLISHED',
      },
    },
    PUBLISHED: {
      on: {
        DRAFT: 'DRAFT',
        INTAKE_PERIOD: 'INTAKE_PERIOD',
      },
    },
    INTAKE_PERIOD: {
      on: {},
    },
  },
});
