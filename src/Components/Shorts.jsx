import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { YOUTUBE_SHORTS_API } from '../Utils/constants';
import ShortsVideoCard from './ShortsVideoCard';

const Shorts = () => {
    const [videoData, setVideoData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(YOUTUBE_SHORTS_API);
            const json = await response.json();
            if (json.items && json.items.length > 0) {
                setVideoData(json.items);
                console.log(json);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className="container mx-auto p-4">
            {videoData.map((video) => (
                <Link to={`/watch/:id ${video.id.videoId}`} key={video.id.videoId}>
                    <ShortsVideoCard info={video} />
                </Link>
            ))}
        </div>
    );
};

export default Shorts;
