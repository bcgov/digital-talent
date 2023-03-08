import { NextApiRequest, NextApiResponse } from 'next';
import { ApiResponse } from '../../../interfaces/api-response';

export interface Opportunity {
  id: number;
  requisition_id: number;
  title: string;
  closes_at: string;
  organization: string;
  division: string;
  job_type: string;
  classification: string;
  salary_range: string;
  hiring_manager: {
    name: string;
    title: string;
    ministry: string;
  };
  locations: string[];
  ministries: string[];
  telework_ok: boolean;
}

export const data: Opportunity[] = [
  {
    id: 0,
    requisition_id: 92534,
    title: 'Full Stack Developer (IS 27)',
    closes_at: '2023-11-01T07:00:00Z',
    organization: 'BC Public Service',
    division: 'Exchange Lab/Digital Office',
    job_type: 'Regular Full Time',
    classification: 'Information Systems R27',
    salary_range: '$72,724.97 - $83,014.85 annually plus 9.9% Temporary Market Adjustment',
    hiring_manager: {
      name: 'Dea De Jarisco',
      title: 'Senior Product Manager',
      ministry: "Citizens' Services",
    },
    locations: ['Burnaby, BC', 'Kamloops, BC', 'Vancouver, BC', 'Victoria, BC'],
    ministries: [
      "Citizens' Services (CITZ)",
      'Social Development and Poverty Reduction (SDPR)',
      'Transportation and Infrastructure (TRANS)',
    ],
    telework_ok: true,
  },
  {
    id: 0,
    requisition_id: 92535,
    title: 'Senior Service Designer (IS 27)',
    closes_at: '2023-11-01T07:00:00Z',
    organization: 'BC Public Service',
    division: '',
    job_type: 'Regular Full Time',
    classification: 'Information Services R27',
    salary_range: '$72,724.97 - $83,014.85 annually plus 9.9% Temporary Market Adjustment',
    hiring_manager: {
      name: '',
      title: '',
      ministry: '',
    },
    locations: ['Burnaby, BC', 'Kamloops, BC', 'Vancouver, BC', 'Victoria, BC'],
    ministries: [
      "Citizens' Services (CITZ)",
      'Social Development and Poverty Reduction (SDPR)',
      'Transportation and Infrastructure (TRANS)',
    ],
    telework_ok: true,
  },
  {
    id: 0,
    requisition_id: 92536,
    title: 'UX Designer (AO 24)',
    closes_at: '2023-11-01T07:00:00Z',
    organization: 'BC Public Service',
    division: '',
    job_type: 'Regular Full Time',
    classification: 'Administrative Officer 24',
    salary_range: '$72,724.97 - $83,014.85 annually plus 9.9% Temporary Market Adjustment',
    hiring_manager: {
      name: '',
      title: '',
      ministry: '',
    },
    locations: ['Victoria, BC'],
    ministries: ['Advanced Education and Skills Training (AEST)'],
    telework_ok: false,
  },
  {
    id: 0,
    requisition_id: 92537,
    title: 'Senior UX Designer (IS 27)',
    closes_at: '2023-11-01T07:00:00Z',
    organization: 'BC Public Service',
    division: '',
    job_type: 'Regular Full Time',
    classification: 'Information Services R27',
    salary_range: '$72,724.97 - $83,014.85 annually plus 9.9% Temporary Market Adjustment',
    hiring_manager: {
      name: '',
      title: '',
      ministry: '',
    },
    locations: ['Burnaby, BC', 'Kamloops, BC', 'Vancouver, BC', 'Victoria, BC'],
    ministries: [
      "Citizens' Services (CITZ)",
      'Social Development and Poverty Reduction (SDPR)',
      'Transportation and Infrastructure (TRANS)',
    ],
    telework_ok: true,
  },
  {
    id: 0,
    requisition_id: 92538,
    title: 'Service Designer (IS 24)',
    closes_at: '2023-11-01T07:00:00Z',
    organization: 'BC Public Service',
    division: '',
    job_type: 'Regular Full Time',
    classification: 'Information Services R24',
    salary_range: '$72,724.97 - $83,014.85 annually plus 9.9% Temporary Market Adjustment',
    hiring_manager: {
      name: '',
      title: '',
      ministry: '',
    },
    locations: ['Burnaby, BC', 'Kamloops, BC', 'Vancouver, BC', 'Victoria, BC'],
    ministries: [
      "Citizens' Services (CITZ)",
      'Social Development and Poverty Reduction (SDPR)',
      'Transportation and Infrastructure (TRANS)',
    ],
    telework_ok: true,
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse<ApiResponse<Opportunity[]>>) {
  const status = 200;
  res.status(status).json({ status, data });
}
