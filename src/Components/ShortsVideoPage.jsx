// src/components/ShortsVideoPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

const ShortsVideoPage = () => {
    const { videoId } = useParams();

    return (
        <div className="container mx-auto p-4">
            <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default ShortsVideoPage;
