import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LeftNav from '../component/SideBar/SideBar';
import SearchResultVideoCard from '../component/SearchResultVideoCard';
import { getSearchPageVideos } from '../store/reducers/getSearchPageVideos';
import { setSearchTerm } from '../features/YouTube/youtubeSlice';
import { useParams } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from '../shared/Loader';

const SearchResult = () => {
    const { searchedVideos, searchTerm } = useSelector((state) => state.youtubeApp);
    const dispatch = useDispatch();
    const { searchQuery } = useParams();

    useEffect(() => {
        document.getElementById('root').classList.remove('custom-h');
        dispatch(setSearchTerm(searchQuery));
        dispatch(getSearchPageVideos(false));
    }, [dispatch, searchQuery, searchTerm]);

    return (
        <div className='flex h-[calc(100%-56px)] overflow-y-auto'>
            <LeftNav />
            <div className='scrollBar_style grow w-[calc(100%-280px)] min-h-[94vh] overflow-y-auto bg-black'>
                <div className='scrollBar_style grid grid-cols-1 gap-2 md:p-5 w-full md:w-[70%] m-auto'>
                    {searchedVideos.length &&
                        searchedVideos[0].map((video) => {
                            return (
                                <div key={video.videoId}>
                                    <InfiniteScroll
                                        dataLength={searchedVideos.length}
                                        next={() => dispatch(getSearchPageVideos(true))}
                                        hasMore={searchedVideos.length > 500}
                                        loader={<Loader />}
                                    >
                                        <SearchResultVideoCard video={video} />
                                    </InfiniteScroll>
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export default SearchResult;
