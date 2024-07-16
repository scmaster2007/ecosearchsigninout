'use client'

import React, { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation'
import { ecocheck } from "./api";
import Image from 'next/image'

interface Result {
  title: string;
  display_link: string;
  url: string;
  snippet: string;
  link: string;
  formatted_url: string;
}

interface Props {
  result: Result[];
}

interface EcoCheckResult {
  id: string;
  link: string;
  title: string;
}

const SearchResultsView: React.FC<Props> = ({
  result,
}) => {
  const searchParams = useSearchParams()
  const inital_search = searchParams.get('search_query')

  const [search, setSearch] = useState(inital_search || '');
  const [selectedURL, setSelectedURL] = useState<string | null>(null);
  const [ecoCheckResult, setEcoCheckResult] = useState<any>(null);

  const handleEcoCheck = async (url: string) => {
    try {
      return ecocheck(url)
    } catch (error) {
      console.error('Error checking eco status:', error);
      throw error;
    }
  };


  const handleSearch = async (search: string) => {
    // handle api call
  }



  useEffect(() => {
    const handleReturnKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        handleSearch(search);
      }
    };

    window.addEventListener("keydown", handleReturnKeyPress);

    return () => {
      window.removeEventListener("keydown", handleReturnKeyPress);
    };
  }, [handleSearch, search]);

  useEffect(() => {
    const handleEcoCheckResult = async () => {
      if (ecoCheckResult) return; // Prevent making the request if we already have a result
  
      let newUrl = selectedURL!.replace(/^https?:\/\//, "");
  
      let transformedUrl;
  
      if (newUrl.startsWith("www.")) {
        let hostname = selectedURL!.split("/")[2];
        transformedUrl = hostname;
      } else {
        let parts = newUrl.split("/");
        let hostname = parts[0];
        transformedUrl = "www." + hostname;
      }
  
      console.log(transformedUrl);
  
      try {
        const result = await handleEcoCheck(transformedUrl);
        setEcoCheckResult(result);
      } catch (error) {
        console.error("Error fetching eco check result:", error);
        setEcoCheckResult(null);
      }
    };
  
    if (selectedURL) {
      handleEcoCheckResult();
    }
  }, [selectedURL, ecoCheckResult]); // Add ecoCheckResult to dependency array

  const toggleEcoCheck = (url: string) => {
    setSelectedURL(url);
  };

  const hideEcoCheck = () => {
    setSelectedURL(null);

    setEcoCheckResult(null)

  };

  return (
    <div>
      {/* <AdsBanner /> */ }
      <Image
        src="https://file-hosting.dashnexpages.net/blog-webready/images/ecosearch-2.svg"
        alt="EcoSearch Logo"
        width={200}
        height={100}
      />
      <div className="relative mx-auto max-w-xl">
        <div className="absolute inset-y-0 left-1 sm:left-0 pl-3 flex items-center pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-600"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="8.5" cy="8.5" r="7" />
            <line x1="13.5" y1="13.5" x2="17.5" y2="17.5" />
          </svg>
        </div>
        <div className="flex">
          <input
            autoComplete="off"
            type="text"
            id="searchBar"
            className="block w-full h-12 pl-10 pr-12 py-3 text-sm rounded-full bg-teal-50 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-100 shadow-lg"
            placeholder="Search or type a URL"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-teal-500"
            aria-label="Search"
            onClick={() => handleSearch(search)}
          >
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              focusable="false"
              aria-hidden="true"
            >
              <path
                fill="currentColor"
                d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.91-3c-.49 0-.9.36-.98.85C16.52 14.2 14.47 16 12 16s-4.52-1.8-4.93-4.15c-.08-.49-.49-.85-.98-.85-.61 0-1.09.54-1 1.14.49 3 2.89 5.35 5.91 5.78V20c0 .55.45 1 1 1s1-.45 1-1v-2.08c3.02-.43 5.42-2.78 5.91-5.78.1-.6-.39-1.14-1-1.14z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="flex relative bg-white items-center border-b-[1px] border-solid border-[#e8e8e8] py-2 justify-center mt-5 mb-5">
        <div className="flex space-x-6">
          <a className="px-[10px] pb-[8px] text-sm mt-auto border-b-[3px] border-solid text-teal-500 border-teal-500 ocean:text-white ocean:border-white ">
            Results
          </a>
          <a
            className="px-[10px] pb-[8px] text-sm mt-auto border-b-[3px] border-solid text-[#626262] ocean:text-white/70 border-transparent dark:text-[#bdc1c6]"
            href="/settings"
          >
            Settings
          </a>
        </div>
      </div>
      <div>
        {result.map((result, index) => (
          <div key={index} className="w-full">
            <div className="p-3 sm:pl-32">
              <div className="inline-flex flex-col w-full">
                <div className="flex items-start overflow-hidden">
                  <span className="flex-shrink-0 w-7 h-7 mr-2.5 rounded-full bg-[#f1f3f4] flex items-center justify-center">
                    <img
                      src={`https://www.google.com/s2/favicons?domain=${result.link}&sz=24`}
                      alt={"Favicon for ${result.title}"}
                      className="h-4.5 w-4.5 object-contain rounded-full"
                      loading="lazy"
                    />
                  </span>
                  <div className="flex flex-col justify-start text-sm text-[#3C4043]">
                    <span>{result.title}</span>
                    <cite className="text-[#3C4043] opacity-90 text-xs font-normal">
                      {result.display_link}
                    </cite>
                  </div>
                </div>
                <div className="flex items-center">
                  <a
                    href={result.link}
                    className="text-lg font-normal text-[#1A0DAB] mt-1 mb-0 overflow-hidden text-ellipsis whitespace-nowrap mr-5"
                  >
                    {result.title}
                  </a>
                  <div
                    className="flex cursor-pointer items-center"
                    onClick={() => toggleEcoCheck(result.display_link)}
                  >
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADaklEQVR4nO2Yz0sbQRTH0/bS/kfSQjUzqxj8WdSeBUFF8BCr0opgKUpbxSKCXkQvHkqLIujZnzNJ9FATq5X6W9OqaYyaaqpJTPLKTMniNpvdTRoaI/uFuey8mbzPzJs3b2Iw6NKlS5cuXbddFR8r7hktxseIoG5EkQ0R9AMTHMQUQ7qbQUlZ1qwHAhGeI4rc6XYUJwogEOEpJvh7uh3ECQOA4Q4m+CUmOJJu53CiAG3QdhdR9CHdTuFkARBFr9PtEE4WgMf8DXAIJwPAsg2iyJmxAJjgF6maUKACVC1WQeNyI9Qv1YPJalIdY7KaoNpeDeZlM1R+quRzaAZgl5Rcni9bKAMlrZ6txjjev90PJ8ETid351TkM7A7IOlUyXwLjh+NwGbqUjHH73dCz2aMNQJgTsuU6rgO4/C44uDyQNOIhEvuxgzHRftO3CTNHM7B2viZ+Y/3X7YtsRbDza4f3hSNhcHgdfIzzwimOGd0fVQdABL1TAyhfKFechIVLVH+vXPvXdu4gEwup6PeJwwn+zRv0Qq2jNmYno2paaVIGwBTP/yvArGeW27FVlOufdE9KdoGtfiAc4N861jpkxyyeLvJ+y7FFZQfi1DmJABwHjrld13qXprhtXmkWQ8cU55AzMCZfyKcaQgE1ADbJ2dWZpLFtZna5llyIQITbsSyiBYCBRs8WjmNT56gTf7/QVqgYQqAGsOXb4gfyeutc74wBaFhu0ATAxiYCUGArkLVBFPk1AWgOoY3EQyjfmq8YQiwNx52LYFdKAFj6Y1r6uSTbP+wc5rs2uDuo+RBTD1U9xIgimhIAFvtR9W33SfpavrRAMBzkfa2rrTFp9DR4CjX2mrhplKVohR14qwlAy0U2sj8i2u9d7PFdYbd1VNNH0xL7YluxeJGFIiGwe+0wdTQlucjYnEoLZ7QYH2oC0FpK9G71gifgkdixi2podwjyLHkxv1E6X8pLCX/YH1NKdG90K58lgl3s/RIXINnGQFhBZv5s5kUdy1JqY0xWEw8jlsW0FnOIoGd/KtEUA/yXRvA39gTITACCI4igJ+JLLO0O0cQaouiV5B2cYav/nh/cjAMg/C+eNzHOZwIAomhPEvMZA0Cwy0iMjdnT2ffjOn9TABAr6Ql2YYItiKDOnLmcR7LhokuXLl26dN02/QbGLlDnjHMnBQAAAABJRU5ErkJggg==" />
                    <p className="font-bold text-lg text-[#43c443] tracking-widest">
                      CHECK
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-start mt-2">
                <div className="md:pr-96 text-sm text-[#545454] overflow-hidden break-words line-clamp-3">
                  {result.snippet}
                </div>
              </div>
            </div>
            {selectedURL === result.display_link && (
              <div className="eco-check-result">
                {ecoCheckResult ? (
                  <div className="fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300">
                    <div className="relative h-screen w-screen min-w-[100vw] max-w-[100vw] bg-white font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased">
                      <div className="flex items-center p-4 font-sans text-2xl antialiased font-semibold leading-snug shrink-0 text-blue-gray-900">
                        EcoChecking: {selectedURL}
                      </div>
                      <div className="relative p-4 font-sans text-base antialiased font-light leading-relaxed border-t border-b border-t-blue-gray-100 border-b-blue-gray-100 text-blue-gray-500">
                        {ecoCheckResult.green ? (
                          <div className="rounded-lg p-6 my-4">
                            <div className="flex items-center justify-center bg-green-100 rounded-full w-12 h-12 mx-auto mb-3.5">
                              <svg
                                aria-hidden="true"
                                className="w-8 h-8 text-green-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            </div>

                            <h1 className="text-2xl text-center font-bold text-green-800 mb-2">
                              Your website is eco-sustainable!
                            </h1>

                            <p className="text-sm text-center text-gray-500">
                              Hosted by: {ecoCheckResult.hosted_by}
                            </p>

                            <h2 className="text-xl font-semibold mb-1">
                              Evidence:
                            </h2>
                            <div className="space-y-1">
                            {ecoCheckResult.supporting_documents.length > 0 ? (
                              ecoCheckResult.supporting_documents.map((item: EcoCheckResult) => (
                                <div key={item.id}>
                                  <a
                                    href={item.link}
                                    className="text-blue-600 hover:underline"
                                  >
                                    {item.title}
                                  </a>
                                </div>
                              ))
                            ) : (
                              <div>None provided</div>
                            )}

                            </div>
                          </div>
                        ) : (
                          <div>
                            <svg
                              className="mx-auto mb-4 text-red-700 w-12 h-12"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 20 20"
                            >
                              <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                              />
                            </svg>
                            <div className="flex justify-center">
                              <h1 className="text-2xl font-bold text-red-800 mb-2 mr-2">
                                OOPS!{" "}
                              </h1>
                              <h1 className="text-2xl font-bold text-green-800 mb-2">
                                Your website isn't eco-sustainable :(
                              </h1>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="flex flex-col flex-wrap items-center justify-end p-4 shrink-0 text-blue-gray-500">
                        <div className="flex">
                          <p className="mr-1">Powered by:</p>
                          <a href="https://admin.thegreenwebfoundation.org/api-docs/" className="text-blue-500 font-bold">Green Web API</a>
                        </div>
                        <button
                          onClick={hideEcoCheck}
                          className="px-6 py-3 mr-1 font-sans text-xs font-bold text-gray-500 uppercase transition-all rounded-lg middle none center hover:bg-gray-50"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="fixed top-0 left-0 w-screen h-screen flex justify-center flex-col items-center bg-teal-900">
                    <svg
                      aria-hidden="true"
                      className="w-16 h-16 text-gray-200 animate-spin dark:text-gray-600 fill-teal-400"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="sr-only">Loading...</span>

                    <h1 className="text-center text-lg font-bold text-white">
                      EcoCheck is loading
                    </h1>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
        <div id="adsense-top" className="adsense-unit"></div>
      </div>
    </div>
  );
};

export default SearchResultsView;
