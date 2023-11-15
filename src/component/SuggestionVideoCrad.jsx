import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import VideoLength from '../shared/VideoLength';

const SuggestionVideoCrad = ({ video }) => {
    const {
        videoId,
        videoTitle,
        videoThumbnail,
        videoDuration,
        videoViews,
        videoAge,
        channelInfo: { image, name },
    } = video;
    return (
        <>
            <div className='flex flex-col md:my-2 md:flex-row'>
                <Link to={`/video/${videoId}`}>
                    <div className='relative h-48 lg:h-20 xl:h-24 w-full md:w-40 md:min-w-40 lg:w-32 lg:min-w-[128px] xl:w-40 xl:min-w-[168px]  md:rounded-xl  bg-slate-800 overflow-hidden'>
                        <img src={videoThumbnail} className='object-cover w-full h-full' />
                        {videoDuration && <VideoLength time={videoDuration} />}
                    </div>
                </Link>
                <div className='flex items-center text-white'>
                    <div className='flex ml-4 overflow-hidden rounded-full md:hidden h-9 w-9'>
                        <img className='object-cover w-full h-full' src={image} />
                    </div>
                    <div className='flex flex-col w-full my-2 ml-3 overflow-hidden md:mt-0'>
                        <span className='text-sm font-semibold lg:text-xs xl:text-sm line-clamp-2'>
                            {videoTitle}
                        </span>
                        <span className='text-[12px] lg:text-[10px] xl:text-[12px] mt-2 mb-0.5 text-white/[0.7] hidden md:flex items-center'>
                            {name}
                        </span>
                        <div className='flex items-center text-xs md:text-sm  text-white/[0.7]  truncate'>
                            <span className='text-[12px] lg:text-[10px] xl:text-[12px] mr-2 md:mr-0 mb-0.5 text-white/[0.7] flex  md:hidden items-center'>
                                {name}
                            </span>
                            <span>{`${videoViews} views`}</span>
                            <span className='flex text-[24px] leading-none text-white/[0,7] relative top-[-7px] mx-1'>
                                .
                            </span>
                            <span className='truncate'>{videoAge}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

SuggestionVideoCrad.propTypes = {
    video: PropTypes.object.isRequired,
};

export default SuggestionVideoCrad;
