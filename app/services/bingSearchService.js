import fetch from 'node-fetch';

export async function bingSearch(query, count = 10, safesearch = 'Moderate') {
  const apiKey = process.env.BING_API_KEY;
  const response = await fetch(`https://api.bing.microsoft.com/v7.0/search?q=${query}&count=${count}&safesearch=${safesearch}`, {
    headers: {
      "Ocp-Apim-Subscription-Key": apiKey
    }
  });
  return response.json();
}
