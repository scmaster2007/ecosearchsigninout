import SearchResultsView from '@/app/components/search-results/SearchResultView'
import React from 'react'

const page = () => {
  interface Result {
    title: string;
    display_link: string;
    url: string;
    snippet: string;
    link: string;
    formatted_url: string;
  }

  // Dummy data array
  const dummyData: Result[] = [
    {
      title: "Google",
      display_link: "google.com",
      url: "https://google.com",
      snippet: "This is a snippet of example text.",
      link: "https://example.com/link",
      formatted_url: "example.com"
    },
    {
      title: "Apple",
      display_link: "apple.com",
      url: "https://apple.com",
      snippet: "Another example snippet.",
      link: "https://anotherexample.com/link",
      formatted_url: "anotherexample.com"
    }
  ];

  return (
    <div>
      <header className="bg-blue-600 text-white p-4">
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2395579769153492"
      crossOrigin="anonymous"></script>
      </header>
      <SearchResultsView result={dummyData} />
    </div>
  );
}

export default page;
