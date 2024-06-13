import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { YOUTUBE_API } from '../Utils/constants';
import VideoCard from './VideoCard';

const VideoContainer = () => {
  const [videos , setVideos] = useState([]);
  useEffect(()=>{
    fetchData();
  },[])
  const fetchData = async () => {
      const data = await fetch(YOUTUBE_API);
      const json = await data.json();
      setVideos(json.items);
  };
  
  return (
    <div className='flex flex-wrap'>
        {videos?.map((video)=>(
          <Link to={"/watch/:id?v="+video.id} key={video.id} >
          <VideoCard info={video} key={video.id} />
          {/* <WatchPage info={video} key={video.id}/> */}
          </Link>

        ))}
    </div>
  )
}

export default VideoContainer