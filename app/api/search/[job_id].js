import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { job_id } = req.query;
  if (req.method === 'GET') {
    try {
      const searchResult = await prisma.searchResult.findUnique({
        where: { job_id },
      });
      if (searchResult) {
        res.status(200).json(searchResult);
      } else {
        res.status(404).json({ error: 'No search results found for the given job ID' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Unable to fetch search result' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
