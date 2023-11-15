import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import VideoLength from '../shared/VideoLength';

const SearchResultVideoCard = ({ video }) => {
    const {
        videoId,
        videoTitle,
        videoDescription,
        videoThumbnail,
        videoDuration,
        videoViews,
        videoAge,
        channelInfo: { image, name },
    } = video;
    return (
        <div className='flex flex-col md:flex-row mb-8 md:mb-3 lg:hover:bg-white/[0.1] rounded-xl md:p-4'>
            <Link to={`/video/${videoId}`}>
                <div className='relative flex w-full overflow-hidden h-52 md:h-48 shrink-0 lg:h-40 xl:h-44 md:w-48 lg:w-64 xl:w-80 md:rounded-xl bg-slate-800'>
                    <img src={videoThumbnail} className='object-cover w-full h-full' />
                    {videoDuration && <VideoLength time={videoDuration} />}
                </div>
            </Link>
            <div className='flex flex-col mt-2 ml-4 overflow-hidden md:ml-6 md:mt-0'>
                <div className='flex gap-1'>
                    <div className='flex items-start mr-3 md:hidden'>
                        <div className='flex overflow-hidden rounded-full h-9 w-9'>
                            <img src={image} className='object-cover w-full h-full' />
                        </div>
                    </div>
                    <span className='text-xs font-semibold text-white md:text-base line-clamp-2'>
                        {videoTitle}
                    </span>
                </div>
                <span className='hidden empty:hidden text-sm line-clamp-1 md:line-clamp-2 text-white/[0.7] md:pr-24 md:my-1'>
                    {videoDescription}
                </span>
                <div className='flex mt-2 md:mt-0'>
                    <div className='items-start hidden mr-3 md:flex'>
                        <div className='flex overflow-hidden rounded-full h-9 w-9'>
                            <img src={image} className='object-cover w-full h-full' />
                        </div>
                    </div>
                    <div className='flex flex-wrap -mt-4 gap-x-2 mx-14 md:mt-0 md:mx-0 md:gap-0 md:flex-col'>
                        <span className='text-xs  md:text-sm md:font-semibold md:mt-2 text-white/[0.7] flex items-center'>
                            {name}
                        </span>
                        <div className='flex text-[10px] mt-2.5 md:mt-0 md:text-sm md:font-semibold text-white/[0.7] truncate overflow-hidden'>
                            <span>{`${videoViews} views`}</span>
                            <span className='flex text-[24px] leading-none text-white/[0,7] relative top-[-10px] mx-1'>
                                .
                            </span>
                            <span className='truncate'>{videoAge}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

SearchResultVideoCard.propTypes = {
    video: PropTypes.object.isRequired,
};

export default SearchResultVideoCard;
