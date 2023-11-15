import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import VideoLength from '../shared/VideoLength';

const VideoCard = ({ video }) => {
    const {
        videoId,
        videoTitle,
        videoThumbnail,
        videoDuration,
        videoViews,
        videoAge,
        channelInfo: { image, name, channelUrl },
    } = video;
    return (
        <div className='flex flex-col md:mb-8 cursor-pointer md:p-1 sm:rounded-md  md:rounded-lg  active:bg-white/[0.15]'>
            <Link to={`/video/${videoId}`}>
                <div className='relative h-[13rem] sm:h-44 md:h-36 lg:h-[9.5rem] xl:h-[9rem] 2xl:h-[10rem] overflow-hidden'>
                    <img
                        src={videoThumbnail}
                        className='object-cover w-full h-full sm:rounded-lg'
                    />
                    {videoDuration && <VideoLength time={videoDuration} />}
                </div>
            </Link>
            <div className='flex items-center text-white md:mt-3'>
                <div className='flex items-center pl-3'>
                    <div className='flex items-center overflow-hidden rounded-full h-9 w-9'>
                        <img className='object-contain w-full h-full ' src={image} />
                    </div>
                    <div className='flex flex-col w-full ml-3 overflow-hidden'>
                        <Link to={`/video/${videoId}`}>
                            <span className='text-[0.6rem] sm:text-xs md:text-sm lg:text-base  mt-2 md:mt-0  font-bold line-clamp-2'>
                                {videoTitle}
                            </span>
                        </Link>
                        <div className='flex items-center md:block md:mt-0'>
                            <a
                                href={`https://www.youtube.com/${channelUrl}`}
                                target='_blank'
                                rel='noreferrer'
                                className='text-[0.6rem] sm:text-xs md:text-base md:font-semibold mb-2.5 sm:mb-1 md:mb-0  flex items-center text-white/[0.7] hover:text-white md:mr-0'
                            >
                                {name}
                            </a>
                            <span className='md:hidden text-2xl leading-none text-white/[0.7] relative top-[-10px] mx-1'>
                                .
                            </span>
                            <div className='flex text-[0.6rem] sm:text-sm md:text-sm md:font-semibold text-white/[0.7]  truncate'>
                                <span>{`${videoViews} views`}</span>
                                <span className='flex text-2xl leading-none text-white/[0,7] relative top-[-10px] mx-1'>
                                    .
                                </span>
                                <span className='truncate'>{videoAge}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

VideoCard.propTypes = {
    video: PropTypes.object.isRequired,
};

export default VideoCard;
