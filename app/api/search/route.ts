import { NextRequest, NextResponse } from "next/server";
import { authenticate } from "../../lib/auth";
import { PrismaClient } from '@prisma/client';
import { googleSearch } from '../../services/googleSearchService'; 
import { braveSearch } from '../../services/braveSearchService';
import { bingSearch } from '../../services/bingSearchService';
import { formatGoogleResults, formatBraveResults, formatBingResults } from '../../utils/formatResults'; 

const prisma = new PrismaClient();

export const GET = async (req: NextRequest) => {
  try {
    await authenticate(req); // Pass the request object to the authenticate function
    return NextResponse.json({ message: 'top secret msg' });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 401 });
  }
};

export const POST = async (req: NextRequest) => {
  try {
    await authenticate(req); // Pass the request object to the authenticate function

    const { search_engine, query, count, safesearch } = await req.json();
    
    if (!search_engine || !query) {
      return NextResponse.json({ error: 'Query and/or search_engine parameter is missing' }, { status: 422 });
    }

    const job_id = Math.random().toString(36).substring(7);
    let searchResults;

    switch (search_engine) {
      case 'google':
        const googleRawResults = await googleSearch(query, count, safesearch);
        searchResults = formatGoogleResults(googleRawResults);
        break;
      case 'brave':
        const braveRawResults = await braveSearch(query, count, safesearch);
        searchResults = formatBraveResults(braveRawResults);
        break;
      case 'bing':
        const bingRawResults = await bingSearch(query, count, safesearch);
        searchResults = formatBingResults(bingRawResults);
        break;
      default:
        return NextResponse.json({ error: 'Invalid search engine' }, { status: 422 });
    }

    await prisma.searchResult.create({
      data: {
        job_id,
        search_engine,
        results: JSON.stringify(searchResults),
      },
    });

    return NextResponse.json({ job_id }, { status: 202 });
  } catch (error) {
    return NextResponse.json({ error: 'Unable to create search result' }, { status: 500 });
  }
};

export default async function handler(req, res) {
  if (req.method === 'GET') {
    return GET(req);
  } else if (req.method === 'POST') {
    return POST(req);
  } else {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
  }
}
