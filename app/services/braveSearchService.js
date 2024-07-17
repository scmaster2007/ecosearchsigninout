import fetch from 'node-fetch';

export async function braveSearch(query, count = 20, safesearch = 'moderate') {
  const apiKey = process.env.BRAVE_API_KEY;
  const response = await fetch(`https://api.search.brave.com/res/v1/web/search?q=${query}&count=${count}&safesearch=${safesearch}`, {
    headers: {
      "Accept": "application/json",
      "User-Agent": "Mozilla/5.0",
      "X-Subscription-Token": apiKey
    }
  });
  return response.json();
}
