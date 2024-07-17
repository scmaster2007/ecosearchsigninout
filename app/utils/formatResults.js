export function formatGoogleResults(results) {
    return results.items.map(item => ({
      title: item.title,
      link: item.link,
      snippet: item.snippet,
      display_link: item.displayLink,
      formatted_url: item.formattedUrl,
    }));
  }
  
  export function formatBingResults(results) {
    return results.items.map(item => ({
      title: item.title,
      link: item.link,
      snippet: item.snippet,
      display_link: item.displayLink,
      formatted_url: item.formattedUrl,
    }));
  }
  
  export function formatBraveResults(results) {
    return results.items.map(item => ({
      title: item.title,
      link: item.link,
      snippet: item.snippet,
      display_link: item.displayLink,
      formatted_url: item.formattedUrl,
    }));
  }
  
  