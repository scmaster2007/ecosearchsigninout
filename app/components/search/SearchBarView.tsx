'use client'

import React, { ChangeEvent, useEffect, useState } from 'react';
import TreeAsset from './assets/tree.png';
import TopBar from './TopBar';
import Image from 'next/image';

// Extend the window object to include webkitSpeechRecognition
declare global {
  interface Window {
    webkitSpeechRecognition: any;
  }
}

// Define custom types if they are not available in your environment
interface CustomSpeechRecognitionEvent {
  results: {
    [index: number]: {
      [index: number]: {
        transcript: string;
      };
    };
  };
}

interface CustomSpeechRecognitionErrorEvent {
  error: string;
}

interface Favourite {
  name: string;
  url: string;
}

const SearchBarView = () => {
  const [search, setSearch] = useState('');
  const [createFavouriteModal, setCreateFavouriteModal] = useState(false);
  const [optionModal, setOptionModal] = useState<number | null>(null);
  const [favURL, setFavURL] = useState('');
  const [name, setName] = useState('');
  const [url, setURL] = useState('');
  const [favourites, setFavourites] = useState<Favourite[]>([]);

  useEffect(() => {
    const storedFavouritesString = window.localStorage.getItem('favourite');
    let storedFavourites: Favourite[] = [];
    
    if (storedFavouritesString) {
      storedFavourites = JSON.parse(storedFavouritesString).filter((item: any): item is Favourite => 
        item.name && item.url
      );
    }

    setFavourites(storedFavourites);
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const searchDictation = () => {
    if ('webkitSpeechRecognition' in window) {
      const speechRecognition = new window.webkitSpeechRecognition();

      speechRecognition.onresult = (event: CustomSpeechRecognitionEvent) => {
        const capturedText = event.results[0][0].transcript;
        setSearch(capturedText);
      };

      speechRecognition.onerror = (event: CustomSpeechRecognitionErrorEvent) => {
        console.error('Speech recognition error:', event.error);
      };

      speechRecognition.start();
    } else {
      console.error('Speech recognition not supported');
    }
  };

  const handleSearch = (search: string) => {
    // api call to get search results
  }

  const ensureHttps = (url: string) => {
    if (!/^https?:\/\//i.test(url)) {
      return `https://${url}`;
    }
    return url;
  };

  const handleAddFavourite = () => {
    const newFavourite = { name, url };
    const updatedFavourites = [...favourites, newFavourite];
    setFavourites(updatedFavourites);
    setCreateFavouriteModal(false);
    window.localStorage.setItem('favourite', JSON.stringify(updatedFavourites));
  };

  const handleShowOptionModal = (index: number, url: string) => {
    setOptionModal(index);
    setFavURL(url);
  };

  const handleHideOptionModal = () => {
    setOptionModal(null);
  };

  const handleDeleteFavourite = () => {
    const index = favourites.findIndex(item => item.url === favURL);

    favourites.splice(index, 1)
    const updatedFavourites = JSON.stringify(favourites);

    localStorage.setItem('favourite', updatedFavourites);

    setOptionModal(null);
    setName('');
    setURL('');

    setFavourites(favourites);
  }

  useEffect(() => {
    const handleReturnKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        handleSearch(search);
      }
    };

    window.addEventListener('keydown', handleReturnKeyPress);
    return () => {
      window.removeEventListener('keydown', handleReturnKeyPress);
    };
  }, [handleSearch, search]);

  return (
    <div>
      <TopBar />
      <div className="text-[#1a202c] min-h-screen flex flex-col items-center justify-center">
        <div className="text-center w-full mb-8">
          <img
            src="https://file-hosting.dashnexpages.net/blog-webready/images/ecosearch-2.svg"
            alt="OceanHero logo"
            className="h-40 w-50 mx-auto"
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
                onChange={handleInputChange}
              />
              <button
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-teal-500"
                aria-label="Search"
                onClick={searchDictation}
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.91-3c-.49 0-.9.36-.98.85C16.52 14.2 14.47 16 12 16s-4.52-1.8-4.93-4.15c-.08-.49-.49-.85-.98-.85-.61 0-1.09.54-1 1.14.49 3 2.89 5.35 5.91 5.78V20c0 .55.45 1 1 1s1-.45 1-1v-2.08c3.02-.43 5.42-2.78 5.91-5.78.1-.6-.39-1.14-1-1.14z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="flex justify-center gap-4 mt-5">
            <button
              className="w-32 px-4 py-2 text-sm bg-[#f1f1f1] text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none"
              onClick={() => handleSearch(search)}
            >
              Search
            </button>
            <button
              className="w-32 h-10 px-4 py-2 text-sm bg-[#f1f1f1] text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none"
              onClick={() => setCreateFavouriteModal(true)}
            >
              Add favourite
            </button>
          </div>
          <div className='mt-4'>
            <div className="flex justify-center items-center mt-0"> 
              <span className="text-3xl font-semibold bg-gradient-to-r from-cyan-500 to-teal-700 text-transparent bg-clip-text">100,215,059</span>
              <Image src={TreeAsset} className="w-7 h-8 ml-2" alt="Tree Icon" />
            </div>
            <p className="text-xs text-gray-600">trees planted by surfing the web 🤯</p>
            <div className="flex justify-center text-xs text-gray-600">
              <p className="mr-1">icon designed by</p>
              <a href="https://www.freepik.com/" className="text-blue-500">freepik</a>
            </div>
          </div>
        </div>

        {createFavouriteModal && (
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">Add to Favourites</h3>
                      <div className="mt-2">
                        <input
                          type="text"
                          placeholder="Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                          type="text"
                          placeholder="URL"
                          value={url}
                          onChange={(e) => setURL(ensureHttps(e.target.value))}
                          className="w-full border border-gray-300 px-3 py-2 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={handleAddFavourite}
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setCreateFavouriteModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {favourites.map((fav, index) => (
          <div key={index} className="flex justify-center items-center mt-2">
            <a href={fav.url} className="text-blue-500">{fav.name}</a>
            <button
              className="ml-2 text-red-500"
              onClick={() => handleShowOptionModal(index, fav.url)}
            >
              Options
            </button>
            {optionModal === index && (
              <div className="fixed z-10 inset-0 overflow-y-auto">
                <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                  <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
                  <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                  <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                      <div className="sm:flex sm:items-start">
                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                          <h3 className="text-lg leading-6 font-medium text-gray-900">Delete Favourite</h3>
                          <div className="mt-2">
                            <p>Are you sure you want to delete this favourite?</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                      <button
                        type="button"
                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={handleDeleteFavourite}
                      >
                        Delete
                      </button>
                      <button
                        type="button"
                        className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={handleHideOptionModal}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBarView;
