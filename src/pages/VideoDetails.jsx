import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SuggestionVideoCrad from '../component/SuggestionVideoCrad';

//! React Icons....
import { AiOutlineLike } from 'react-icons/ai';
import { BiDislike } from 'react-icons/bi';
import { PiShareFatLight } from 'react-icons/pi';
import { TfiDownload } from 'react-icons/tfi';
import { HiOutlineScissors } from 'react-icons/hi';
import { MdOutlinePlaylistAdd } from 'react-icons/md';
import { useEffect } from 'react';
import { getVideoDetails } from '../store/reducers/getVideoDetails';
import { getRecommendedVideos } from '../store/reducers/getRecommendedVideos';

const VideoDetails = () => {
    document.getElementById('root').classList.add('custom-h');
    const { currentPlaying, recomendedVideos } = useSelector((state) => state.youtubeApp);
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            dispatch(getVideoDetails(id));
        } else {
            navigate('/');
        }
    }, [id, dispatch, navigate]);

    useEffect(() => {
        if (currentPlaying) {
            dispatch(getRecommendedVideos(id));
        }
    }, [currentPlaying, dispatch, id]);

    return (
        currentPlaying &&
        currentPlaying?.videoId === id && (
            <div className='flex flex-row justify-center h-full overflow-y-auto bg-black scrollBar-none'>
                <div className='w-full xl:w-[1700px]  flex flex-col xl:flex-row overflow-y-auto h-full'>
                    <div className='scrollBar_style h-full flex flex-col lg:w-[calc(100%-350px)] xl:lg:w-[calc(100%-400px)] px-4  py-3 lg:py-6 md:overflow-y-auto'>
                        <div className='h-[200px] md:h-[400px] lg:h-[400px] xl:h-[600px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0 md:rounded-2xl overflow-hidden'>
                            <iframe
                                src={`https://www.youtube.com/embed/${currentPlaying.videoId}`}
                                frameBorder={0}
                                width='100%'
                                height='100%'
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className='mt-4 text-sm font-bold text-white md:text-xl line-clamp-2'>
                            {currentPlaying.videoTitle}
                        </div>
                        <div className='flex flex-col justify-between mt-4 md:flex-row'>
                            {/* //!Left Side  */}
                            <div className='flex items-center gap-3'>
                                <div className='flex items-start'>
                                    <div className='flex w-8 h-8 overflow-hidden md:h-11 md:w-11'>
                                        <img
                                            src={currentPlaying.channelInfo.image}
                                            className='rounded-full'
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col ml-1 md:ml-3'>
                                    <div className='flex items-center font-semibold text-white text-md'>
                                        {currentPlaying.channelInfo.name}
                                    </div>
                                    <div className='text-white/[0.7] text-xs md:text-sm'>
                                        {`${currentPlaying.channelInfo.subscribers} subscribers`}
                                    </div>
                                </div>
                                <div className='flex items-center ml-auto md:ml-3 px-2 md:px-4 h-8 md:h-9 rounded-2xl md:rounded-3xl bg-white hover:bg-white/[0.9] cursor-pointer'>
                                    <span className='text-xs font-semibold md:text-sm'>
                                        Subscribe
                                    </span>
                                </div>
                            </div>

                            {/* //!Right Side  */}
                            <div className='flex items-center gap-2 mt-4 overflow-x-auto text-white md:mt-0'>
                                <div className='relative flex items-center justify-center'>
                                    <div className='flex items-center px-3 pr-4 py-2 rounded-l-2xl md:rounded-l-3xl bg-white/[0.15] hover:bg-white/[0.3] cursor-pointer'>
                                        <AiOutlineLike className='mr-2 text-sm text-white md:text-xl' />
                                        <span className='text-[10px] md:text-sm'>{`${currentPlaying.videoLikes}`}</span>
                                    </div>
                                    <span className='text-xl text-white/[0.3] pb-2 absolute left-[59%]'>
                                        |
                                    </span>
                                    <div className='flex items-center px-3 pl-4 py-2 rounded-r-2xl md:rounded-r-3xl bg-white/[0.15] hover:bg-white/[0.3] cursor-pointer'>
                                        <BiDislike className='mr-2 text-sm text-white cursor-pointer md:text-xl' />
                                    </div>
                                </div>
                                <div className='flex items-center px-3 lg:py-5 h-8 rounded-2xl md:rounded-3xl bg-white/[0.15] hover:bg-white/[0.3] cursor-pointer'>
                                    <PiShareFatLight className='mr-2 text-sm text-white cursor-pointer md:text-xl' />
                                    <span className='text-xs font-semibold md:text-sm'>Share</span>
                                </div>
                                <div className='flex items-center px-3 lg:py-5 h-8 rounded-2xl md:rounded-3xl bg-white/[0.15] hover:bg-white/[0.3] cursor-pointer'>
                                    <TfiDownload className='mr-2 text-xs text-white cursor-pointer md:text-base' />
                                    <span className='text-xs font-semibold md:text-sm'>
                                        Download
                                    </span>
                                </div>
                                <div className='flex items-center px-3 lg:py-5 h-8 rounded-2xl md:rounded-3xl bg-white/[0.15] hover:bg-white/[0.3] cursor-pointer'>
                                    <HiOutlineScissors className='mr-2 text-sm text-white cursor-pointer md:text-xl' />
                                    <span className='text-xs font-semibold md:text-sm'>Clip</span>
                                </div>
                                <div className='flex items-center px-3 lg:py-5 h-8 rounded-2xl md:rounded-3xl bg-white/[0.15] hover:bg-white/[0.3] cursor-pointer'>
                                    <MdOutlinePlaylistAdd className='mr-2 text-sm text-white cursor-pointer md:text-xl' />
                                    <span className='text-xs font-semibold md:text-sm'>Save</span>
                                </div>
                            </div>
                        </div>
                        {/* <div
                            className={`px-2 py-2 md:px-8 md:py-5 mt-7 bg-white/[0.2] rounded-lg text-white h-full`}
                        >
                            <div className='flex'>
                                <div>{currentPlaying.videoViews}</div>
                                <div>{currentPlaying.videoAge}</div>
                            </div>
                            <p
                                className={` text-xs md:text-sm overflow-hidden ${
                                    show ? 'h-full' : 'h-2'
                                }`}
                            >
                                {currentPlaying.videoDescription}
                            </p>
                            <div>
                                <span
                                    className='text-white cursor-pointer'
                                    onClick={() => setShow((prev) => !prev)}
                                >
                                    {show ? 'Show less' : '...more'}
                                </span>
                            </div>
                        </div> */}
                    </div>
                    <div className='scrollBar-none flex flex-col flex-auto py-6 md:px-4 overflow-y-auto lg:w-[350px] xl:w-[500px]'>
                        {recomendedVideos.length &&
                            recomendedVideos.map((video) => {
                                return <SuggestionVideoCrad key={video.videoId} video={video} />;
                            })}
                    </div>
                </div>
            </div>
        )
    );
};

export default VideoDetails;
