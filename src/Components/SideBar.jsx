import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { HOME_URL, SHORTS_ICON } from '../Icons/Icons';

const SideBar = () => {
  const isDarkMode = useSelector((store) => store.app.isDarkMode);
  const isToggleMenu = useSelector((store) => store.app.isToggleMenu);

  if (!isToggleMenu) return null;

  return (
    <div className={`shadow-lg w-52 fixed sm:relative ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <ul className='m-4'>
        <li>
          <Link to='/' className='hover:bg-black opacity-50 px-8 rounded-sm flex'>
            {HOME_URL}
            Home
          </Link>
        </li>
        <li>
        <Link to='shorts/:id' className='hover:bg-black opacity-50 px-8 rounded-sm flex'>
        <img src={SHORTS_ICON} className='h-5'/>
        Shorts
        </Link>
        </li>
        <li className='hover:bg-black opacity-50 px-8 rounded-sm flex'>Subscriptions</li>
      </ul>
      <div className='m-4 border-t border-gray-300'>
        <h1 className="font-bold pt-4 text-2xl">Explore</h1>
        <ul>
          <li className='hover:bg-black opacity-50 px-8 rounded-sm flex'>Trending</li>
          <li className='hover:bg-black opacity-50 px-8 rounded-sm flex'>Shopping</li>
          <li className='hover:bg-black opacity-50 px-8 rounded-sm flex'>Music</li>
          <li className='hover:bg-black opacity-50 px-8 rounded-sm flex'>Film</li>
          <li className='hover:bg-black opacity-50 px-8 rounded-sm flex'>Live</li>
          <li className='hover:bg-black opacity-50 px-8 rounded-sm flex'>Gaming</li>
          <li className='hover:bg-black opacity-50 px-8 rounded-sm flex'>News</li>
          <li className='hover:bg-black opacity-50 px-8 rounded-sm flex'>Sport</li>
          <li className='hover:bg-black opacity-50 px-8 rounded-sm flex'>Courses</li>
          <li className='hover:bg-black opacity-50 px-8 rounded-sm flex'>Fashion & Beauty</li>
        </ul>
      </div>
      <div className='m-4 border-b border-gray-300'>
        <ul>
          <li className='hover:bg-black opacity-50 px-8 rounded-sm flex'>Settings</li>
          <li className='hover:bg-black opacity-50 px-8 rounded-sm flex'>Report History</li>
          <li className='hover:bg-black opacity-50 px-8 rounded-sm flex'>Help</li>
          <li className='hover:bg-black opacity-50 px-8 rounded-sm flex'>Send Feedback</li>
        </ul>
      </div>
      <p className='m-4 text-sm'>
        AboutPressCopyrightContact usCreatorAdvertiseDevelopers
        TermsPrivacyPolicy & SafetyHow YouTube worksTest new features
      </p>
    </div>
  );
}

export default SideBar;
