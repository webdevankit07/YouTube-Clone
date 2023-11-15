import { useDispatch, useSelector } from 'react-redux';
import SideBar from '../component/SideBar/SideBar';
import VideoCard from '../component/VideoCard';
import { useEffect } from 'react';
import { getHomePageVideos } from '../store/reducers/getHomePageVideos';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from '../shared/Loader';
import SearchTerms from '../component/SearchTerms';

const Feed = () => {
    const { videos, category } = useSelector((state) => state.youtubeApp);
    const dispatch = useDispatch();

    useEffect(() => {
        document.getElementById('root').classList.remove('custom-h');
        dispatch(getHomePageVideos(false));
    }, [dispatch, category]);

    return (
        <div className='flex flex-row sm:max-md:h-[calc(100%-44px)] h-[calc(100%-56px)] sm:max-md: overflow-y-auto'>
            <SideBar />
            <div className='grow w-[calc(100%-280px)] h-full overflow-y-auto bg-black'>
                <SearchTerms />
                <div className='grid grid-cols-1 gap-1 overflow-y-auto md:gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 md:p-5'>
                    {videos.length &&
                        videos[0]?.map((video) => (
                            <InfiniteScroll
                                key={video.videoId}
                                dataLength={videos.length}
                                next={() => dispatch(getHomePageVideos(true))}
                                hasMore={videos.length > 500}
                                loader={<Loader />}
                            >
                                <VideoCard video={video} />
                            </InfiniteScroll>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Feed;
