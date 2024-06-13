
const VideoCard = ({ info }) => {

  const { snippet, statistics } = info || {};
  const { title, thumbnails, channelTitle } = snippet || {};

  const viewCount = statistics ? statistics.viewCount : 'N/A';

  return (
    <div className='p-2 hover:bg-gray-100 rounded-lg hover:border-black '>
      {thumbnails && <img className='rounded-lg w-96 hover:border ' alt='thumbnails' src={thumbnails.medium.url}  />}
      <ul>
        <li className='w-64'>{title}</li>
        <li>{channelTitle}</li>
        <li>{viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
