import { NextApiRequest, NextApiResponse } from 'next';
import { data, Opportunity } from '.';
import { ApiResponse } from '../../../interfaces/api-response';

export default function handler(req: NextApiRequest, res: NextApiResponse<ApiResponse<Opportunity>>) {
  const { id } = req.query;
  const match = data.find((d) => d.requisition_id === +(id ?? -1));

  const status = match ? 200 : 404;
  res.status(200).json({ status, ...(match && { data: match }) });
}
