import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

//! .......... React-Icons ...........
import { BiArrowBack } from 'react-icons/bi';
import { MdKeyboardVoice } from 'react-icons/md';

//! .......... Components ...........
import Loader from '../../shared/Loader';
import { clearSearchedVideos, setDetailSideBar } from '../../features/YouTube/youtubeSlice';
import HeaderLeft from './HeaderLeft';
import HeaderCenter from './HeaderCenter';
import HeaderRight from './HeaderRight';
import MobileSideBar from '../SideBar/MobileSideBar';
import CreativeSection from '../Footer/CreativeSection';

const Header = () => {
    const { loading, detailSideBar } = useSelector((state) => state.youtubeApp);
    const [openSearch, setOpenSearch] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();

    const searchQueryHandler = (e) => {
        if (
            (e?.key === 'Enter' ||
                e.target.id === 'searchButton' ||
                e.target.id === 'search-button') &&
            searchQuery?.length > 0
        ) {
            if (location.pathname !== `/search/${searchQuery}`) {
                dispatch(clearSearchedVideos());
                navigate(`/search/${searchQuery}`);
            } else {
                navigate(`/search/${searchQuery}`);
            }
            setSearchQuery('');
            setOpenSearch(false);
        }
    };

    const sideBarMenuToggle = () => {
        dispatch(setDetailSideBar(!detailSideBar));
    };

    return (
        <div className='sticky top-0 z-40 flex flex-row items-center justify-between px-3 py-4 bg-white h-11 md:h-14 md:px-5 dark:bg-black'>
            {loading && <Loader />}
            <MobileSideBar />
            <CreativeSection />
            <HeaderLeft sideBarMenuToggle={sideBarMenuToggle} />
            <HeaderCenter
                searchQuery={searchQuery}
                searchQueryHandler={searchQueryHandler}
                setSearchQuery={setSearchQuery}
            />
            <HeaderRight setOpenSearch={setOpenSearch} />

            {openSearch && (
                <div className='absolute top-0 right-0 flex items-center justify-between w-full gap-2 px-2 py-2 bg-black sm:py-3 sm:px-10 sm:gap-10 group sm:hidden'>
                    <div
                        className='text-white cursor-pointer left-arrow hover:bg-[#303030]/[0.6] p-2 rounded-full'
                        onClick={() => setOpenSearch(false)}
                    >
                        <BiArrowBack />
                    </div>
                    <div className='w-full flex bg-white/[0.1] border-[#303030] rounded-2xl'>
                        <input
                            type='text'
                            className='w-full py-2 pl-5 pr-5 text-xs text-white bg-transparent outline-none'
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder='Search YouTube'
                            onKeyUp={searchQueryHandler}
                            autoFocus
                        />
                    </div>
                    <div className='flex items-center justify-center p-2 rounded-full bg-[#303030]/[0.6] active:bg-[#303030]/[0.9] cursor-pointer transition-all delay-75'>
                        <MdKeyboardVoice className='text-lg text-white cursor-pointer lg:text-xl' />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;
