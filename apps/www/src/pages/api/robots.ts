import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.send(
    process.env.NODE_ENV === 'production'
      ? `User-agent: *
Allow: /
`
      : `User-agent: *
Disallow: /
`,
  );
}
