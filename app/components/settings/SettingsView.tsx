'use client'

import { useState, useEffect } from "react";

const SettingsView = () => {
    const [search_engine, setSearchEngine] = useState<string>('google');
    const [safesearch, setSafeSearch] = useState<string>('strict');
    const [search_count, setSearchCount] = useState<string>('10');

    useEffect(() => {
        const initSearchEngine = window.localStorage.getItem('search_engine') || 'google';
        const initSafeSearch = window.localStorage.getItem('safesearch') || 'strict';
        const initSearchCount = window.localStorage.getItem('search_count') || '10';

        setSearchEngine(initSearchEngine);
        setSafeSearch(initSafeSearch);
        setSearchCount(initSearchCount);
    }, []);

    const results = [
        {
            key: "search_engine",
            title: "Search Provider",
            description: "Set the search engine that powers your searches",
            options: ["bing", "google", "brave"],
        },
        {
            key: "safesearch",
            title: "Safe Search",
            description: "Blocks inappropriate material from results",
            options: ["off", "moderate", "strict"],
        },
    ];

    const handleOptionChange = (setting_key: string, option: string) => {
        switch(setting_key) {
            case 'safesearch':
                setSafeSearch(option);
                break;
            case 'search_engine':
                setSearchEngine(option);
                break;
        }
    };

    const handleSettingStorage = () => {
        if (search_engine) {
            window.localStorage.setItem('search_engine', search_engine);
        }
        if (safesearch) {
            window.localStorage.setItem('safesearch', safesearch);
        }
        if (search_count) {
            window.localStorage.setItem('search_count', search_count);
        }
    };

    const handleGetValue = (key: string): string | number | readonly string[] | undefined => {
        if (key === 'search_engine') {
            return search_engine || ' ';
        }
        if (key === 'safesearch') {
            return safesearch || ' ';
        }
    };

    return (
        <div className="p-6 lg:ml-16 lg:mr-16">
            <h2 className="text-4xl font-bold mb-6">Settings</h2>
            {results.map((setting) => (
                <div key={setting.key} className="mb-6 md:flex md:items-center md:justify-between">
                    <div className="lg:flex-1 lg:mr-8">
                        <p className="text-lg font-medium">{setting.title}</p>
                        <p className="text-sm text-gray-600">{setting.description}</p>
                    </div>
                    <div className="lg:mt-0 md:w-[600px]">
                        <select
                            className="py-3 px-3 w-full rounded-full text-sm bg-gray-100 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                            onChange={(e) => handleOptionChange(setting.key, e.target.value)}
                            value={handleGetValue(setting.key)}
                        >
                            {setting.options.map((option, idx) => (
                                <option key={idx} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            ))}

            <br />

            <h3 className="text-2xl font-semibold">Number of results:</h3>
            <p className="text-md text-gray-600 mb-14">This is the max amount of searches that can be presented to you.</p>
            <input type="number" className="py-3 px-3 w-full rounded-full text-sm bg-gray-100 border-gray-300 focus:border-blue-500 focus:ring-blue-500" onChange={(e) => setSearchCount(e.target.value)} value={search_count || 'None'}></input>
            <div className="flex justify-end mt-5 mb-28">
                <button className='bg-teal-700 py-3 px-3 text-white rounded-full' onClick={handleSettingStorage}>Save all changes</button>
            </div>
        </div>
    );
};

export default SettingsView;
