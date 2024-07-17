import fetch from 'node-fetch';

export async function googleSearch(query, num = 10, safesearch = 'off') {
  const apiKey = process.env.GOOGLE_API_KEY;
  const cxKey = process.env.GOOGLE_CX_KEY;
  const response = await fetch(`https://www.googleapis.com/customsearch/v1?q=${query}&key=${apiKey}&cx=${cxKey}&num=${num}&safesearch=${safesearch}`);
  return response.json();
}
