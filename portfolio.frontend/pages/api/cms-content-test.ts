import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Fake CMS content for testing
  const cmsContent = {
    title: "Hello from CMS",
    body: "This is a test payload to simulate CMS data.",
    timestamp: new Date().toISOString(),
  };

  res.status(200).json(cmsContent);
}