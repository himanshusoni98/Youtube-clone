
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';

const Body = () => {
  const isDarkMode = useSelector((store) => store.app.isDarkMode);
  return (
    <div className={`flex ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
    <SideBar/>
    <Outlet/>
    </div>
  )
}

export default Body