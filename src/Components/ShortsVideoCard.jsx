// src/components/ShortsVideoCard.js
import React from 'react';

const ShortsVideoCard = ({ info }) => {
    const { snippet } = info || {};
    const { title, thumbnails, channelTitle } = snippet || {};

    return (
        <div className="mb-4 p-4 border rounded-lg">
            <img className="rounded-lg w-96 hover:border" alt='thumbnails' src={thumbnails?.medium?.url} />
            <ul>
                <li className="w-64">{title}</li>
                <li>{channelTitle}</li>
            </ul>
        </div>
    );
};

export default ShortsVideoCard;
