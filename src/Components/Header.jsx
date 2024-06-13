import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DarkMode, toggleMenu } from '../Utils/appSlice';
import { DARK_BTN, HAMBURGER_MENU, LIGHT_BTN, USER_LOGO, YOUTUBE_LOGO, YOUTUBE_SEARCH_API } from '../Utils/constants';

// Constructing the YouTube search API URL
//const YOUTUBE_SEARCH_API = (query) => `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${GOOGLE_API}`;

const Header = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestion, setSuggestion] = useState([]);
    const [showSuggestion, setShowSuggestion] = useState(false);

    const isDarkMode = useSelector((store) => store.app.isDarkMode);
    const dispatch = useDispatch();

    useEffect(() => {
        if (searchQuery.trim().length === 0) {
            setSuggestion([]);
            return;
        }

        const timer = setTimeout(() => getSearchResult(), 200);
        return () => {
            clearTimeout(timer);
        };
    }, [searchQuery]);

    const getSearchResult = async () => {
        if (searchQuery.trim().length === 0) {
            setSuggestion([]);
            return;
        }

        const response = await fetch(YOUTUBE_SEARCH_API+(searchQuery));
        const json = await response.json();
        const suggestions = json.items?.map(item => item.snippet.title);
        setSuggestion(suggestions);
    };

    const handleSearch = () => {
        getSearchResult();
    };

    const handleSuggestionClick = (suggestion) => {
        setSearchQuery(suggestion);
        setShowSuggestion(false);
        handleSearch();  // Perform search when a suggestion is clicked
    };

    const toggleMenuHandle = () => {
        dispatch(toggleMenu());
    };

    const darkModeButton = () => {
        dispatch(DarkMode());
    };

    return (
        <div className={`grid grid-flow-col m-0 p-4 shadow-lg justify-between ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
            <div className='flex col-span-1 cursor-pointer'>
                <img className='lg:h-6 sm:h-3' onClick={toggleMenuHandle} src={HAMBURGER_MENU} alt="menu" />
                <img className='hidden sm:inline lg:h-6 mx-2 sm:h-2 md:h-3' src={YOUTUBE_LOGO} alt="YouTube logo" />
            </div>
            <div className='col-span-10'>
                <div className='text-center'>
                    <input 
                        type='search'
                        placeholder='Search'
                        className='border rounded-l-3xl lg:w-[60%] sm:w-[30%] p-1 px-5'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setShowSuggestion(true)}
                        onBlur={() => setTimeout(() => setShowSuggestion(false), 200)}
                    />
                    <button className="border rounded-r-3xl p-1 bg-gray-200" onClick={handleSearch}>Search</button>
                </div>
                {showSuggestion && (
                    <div className='fixed bg-white ml-[12.5rem] w-[42.5%] border border-gray-200 rounded-lg'>
                        <ul>
                            {suggestion.map((s, index) => (
                                <li 
                                    key={index} 
                                    className='py-2 px-3 shadow-sm hover:bg-gray-100 cursor-pointer' 
                                    onMouseDown={() => handleSuggestionClick(s)}
                                >
                                    {s}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            <div className='col-span-1 flex'>
                <img alt='dark' onClick={darkModeButton} className={`h-8 ${isDarkMode ? 'bg-white text-black' : 'bg-white text-white'}`} src={isDarkMode ? DARK_BTN : LIGHT_BTN} />
                <img alt='user' className='lg:h-8 sm:h-4 ml-2' src={USER_LOGO} />
            </div>
        </div>
    );
};

export default Header;
