import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { LIKE_BTN } from '../Icons/Icons';
import { closeMenu } from '../Utils/appSlice';
import { YOUTUBE_API } from '../Utils/constants';
import CommentsContainer from './Comments';
import LiveChat from './LiveChat';

const WatchPage = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const videoId = searchParams.get('v');

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeMenu());
    }, [dispatch]);

    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        fetchVideos();
    }, []);

    useEffect(() => {
        if (videoId) {
            const video = videos.find((v) => v.id === videoId);
            setSelectedVideo(video);
        }
    }, [videoId, videos]);

    const fetchVideos = async () => {
            const response = await fetch(YOUTUBE_API);
            const json = await response.json();
            setVideos(json.items);
            console.log(json.items)
    };

    const { snippet, statistics } = selectedVideo || {};
    const { title, channelTitle, commentCount} = snippet || {};

    return (
        <div className='w-full'>
            <div className="m-6 flex">
                <div>
                    {videoId && (
                        <iframe
                            width="1000"
                            height="500"
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    )}
                    {selectedVideo && (
                        <div>
                        
                            <div>
                                <h1 className=' font-bold text-xl m-4'>{title}</h1>
                                <div className='flex'>
                                <img className="rounded-full bg-gray-400 md:w-10 md:h-10 w-8 h-8"  src={snippet?.thumbnails?.default?.url}  alt='channelpic'/>
                                <h1 className=' font-bold text-2xl'>{channelTitle}</h1>
                                <button className='p-4 bg-gray-200 m-2 rounded-full'>JOIN</button>
                                <button className='p-4 bg-gray-200 m-2 rounded-full'>SUBSCRIBE</button>
                                <p className='flex items-center'><img src={LIKE_BTN} className='h-8'/> {statistics?.likeCount}</p>
                                <button className='p-4 bg-gray-200 m-2 rounded-full'>SHARE</button>
                                <button className='p-4 bg-gray-200 m-2 rounded-full'>DOWNLOAD</button>
                                </div>
                                
                            </div>
                            
                        </div>
                    )}
                </div>
                <div className='w-full ml-3'>
                    <LiveChat />
                </div>
            </div>
            <div className='ml-4'>
            <CommentsContainer videoId={videoId}/>
            </div>
        </div>
    );
}

export default WatchPage;
