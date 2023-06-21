import { SYSTEM_USER_ID } from '../modules/auth/auth.constants';
import { SyncClassificationCommand } from '../modules/classification/commands/sync-classification/sync-classification.command';
import { SyncClassificationInput } from '../modules/classification/inputs/sync-classification.input';

const syncSeeds: SyncClassificationInput[] = [
  {
    id: 'f36a4fe0-a2a3-4d55-a070-c8e6cb5c8638',
    name: 'Full Stack Developer',
    code: 'IS',
    grid: '18',
    salary_range: [62255.85, 70557.73],
  },
  {
    id: '44c4762e-a9ab-404a-bd8a-ba265415fc3b',
    name: 'Full Stack Developer',
    code: 'IS',
    grid: '21',
    salary_range: [67728.87, 77012.22],
  },
  {
    id: 'a63c7a2e-0cf5-4200-ab40-3acb30132bdd',
    name: 'Full Stack Developer',
    code: 'IS',
    grid: '24',
    salary_range: [73855.42, 84134.34],
    salary_adjustment: 6.6,
  },
  {
    id: 'a44696cf-8c87-446b-a347-aae341de95fa',
    name: 'Full Stack Developer',
    code: 'IS',
    grid: '27',
    salary_range: [80652.2, 91992.7],
    salary_adjustment: 9.9,
  },
  {
    id: '6a8d9464-ee15-4049-9f2f-03b8a8a90078',
    name: 'Full Stack Developer',
    code: 'IS',
    grid: '30',
    salary_range: [88152.35, 100665.3],
    salary_adjustment: 9.9,
  },
  {
    id: '8175bbb8-6616-4b66-a717-f8f105a355b0',
    name: 'Dev Ops Specialist',
    code: 'IS',
    grid: '27',
    salary_range: [80652.2, 91992.7],
    salary_adjustment: 9.9,
  },
  {
    id: '511c2467-3599-4756-939b-5f1f939f35d7',
    name: 'Product Manager',
    code: 'IS',
    grid: '30',
    salary_range: [88152.35, 100665.3],
    salary_adjustment: 9.9,
  },
  {
    id: '7313bb5a-59a5-4e01-9daf-e97bd14d174c',
    name: 'Product Manager',
    code: 'BAND',
    grid: '3',
    salary_range: [86200.0, 122100.01],
  },
  {
    id: 'a02685b6-7f10-4e6a-8e4c-5fc80a28b645',
    name: 'Scrum Master',
    code: 'IS',
    grid: '24',
    salary_range: [73855.42, 84134.34],
    salary_adjustment: 6.6,
  },
  {
    id: '0293b9b1-ae6d-497d-8a9d-0e4cbfbcc004',
    name: 'Scrum Master',
    code: 'IS',
    grid: '27',
    salary_range: [80652.2, 91992.7],
    salary_adjustment: 9.9,
  },
  {
    id: 'a3898a35-3934-49ce-883a-2531e143b822',
    name: 'Site Reliability Specialist',
    code: 'IS',
    grid: '27',
    salary_range: [80652.2, 91992.7],
    salary_adjustment: 9.9,
  },
  {
    id: '2d69fb09-6b01-4d66-857e-6b0fbf582047',
    name: 'Site Reliability Specialist',
    code: 'IS',
    grid: '30',
    salary_range: [88152.35, 100665.3],
    salary_adjustment: 9.9,
  },
  {
    id: '9633ff77-e0c0-459e-9928-a6d47bd9fb8a',
    name: 'User Experience Designer',
    code: 'IS',
    grid: '24',
    salary_range: [73855.42, 84134.34],
    salary_adjustment: 6.6,
  },
  {
    id: '9426b4fc-95b2-483e-94ad-7344305ecdfc',
    name: 'User Experience Designer',
    code: 'IS',
    grid: '27',
    salary_range: [80652.2, 91992.7],
    salary_adjustment: 9.9,
  },
  {
    id: '4281d09e-0aa6-4165-ab47-52c02860e44f',
    name: 'User Experience Researcher',
    code: 'AO',
    grid: '24',
    salary_range: [73855.42, 84134.34],
  },
  {
    id: '75e32203-e186-45cc-9a34-4cc53ea54bb8',
    name: 'User Experience Researcher',
    code: 'AO',
    grid: '27',
    salary_range: [80652.2, 91992.7],
  },
];

const syncCommands = syncSeeds.map((seed) => new SyncClassificationCommand(seed, { created_by: SYSTEM_USER_ID }));

export default [...syncCommands];
