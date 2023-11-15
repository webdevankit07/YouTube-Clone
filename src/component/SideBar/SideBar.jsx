import { useDispatch, useSelector } from 'react-redux';
import Footer from '../Footer';
import { clearVideos, setCategory, setSelectedMenu } from '../../features/YouTube/youtubeSlice';
import MenuItems from './MenuItems';
import {
    exploreSection,
    homeSection,
    moreSection,
    mySection,
    settingsSection,
    shortSideBar,
} from '../../utils/constants';
import { IoLogOutOutline } from 'react-icons/io5';
import { BiLogIn } from 'react-icons/bi';
import { signOut } from 'firebase/auth';
import { firebaseAuth, signInWIthGoogle } from '../../features/FireBase/firebaseSlice';
import ShortMenuItems from './ShortMenuItems';

const SideBar = () => {
    const { detailSideBar } = useSelector((state) => state.youtubeApp);
    const { login } = useSelector((state) => state.firebaseSlice);
    const dispatch = useDispatch();

    const clickHandler = (type, name) => {
        if (type !== 'category') {
            dispatch(setSelectedMenu(name));
            return;
        }
        dispatch(clearVideos());
        dispatch(setCategory(name));
        dispatch(setSelectedMenu(name));
    };

    return (
        <div
            className={`leftNav_scrollBar md:flex ${
                detailSideBar && 'w-[200px] md:w-[280px]'
            } overflow-y-auto  sm:py-4 bg-black absolute md:relative z-10 ${
                detailSideBar ? 'translate-x-0' : 'translate-x-[-300px]'
            } md:translate-x-0 transition-all`}
        >
            {detailSideBar ? (
                <>
                    <div className='flex-col hidden px-5 sm:flex'>
                        {/* //! ...... Home Section ...... */}
                        <div>
                            <MenuItems clickHandler={clickHandler} items={homeSection} />
                        </div>

                        {/* //! ...... My Section ...... */}
                        <div>
                            <MenuItems clickHandler={clickHandler} items={mySection} />
                        </div>

                        {/* //! ...... Login-LogOut Section ...... */}
                        <div
                            className='flex items-center gap-2 px-3 text-white cursor-pointer rounded-lg py-2 hover:bg-white/[0.15]'
                            onClick={() =>
                                login ? signOut(firebaseAuth) : dispatch(signInWIthGoogle())
                            }
                        >
                            {login ? (
                                <IoLogOutOutline className='text-xl' />
                            ) : (
                                <BiLogIn className='text-xl' />
                            )}
                            <span>{login ? 'Sign Out' : 'Sign In'}</span>
                        </div>
                        <hr className='hidden sm:block my-4 border-white/[0.2]' />

                        {/* //! ...... Explore Section ...... */}
                        <div>
                            <MenuItems
                                clickHandler={clickHandler}
                                items={exploreSection}
                                heading={'Explore'}
                            />
                        </div>

                        {/* //! ...... More - Section ...... */}
                        <div>
                            <MenuItems clickHandler={clickHandler} items={moreSection} />
                        </div>

                        {/* //! ...... Setting - Section ...... */}
                        <div>
                            <MenuItems clickHandler={clickHandler} items={settingsSection} />
                        </div>

                        {/* //! ...... Footer-Section ...... */}
                        <div className=' text-white/[0.5]'>
                            <Footer />
                        </div>
                    </div>
                </>
            ) : (
                <div className='flex-col hidden px-2 sm:flex'>
                    <ShortMenuItems clickHandler={clickHandler} items={shortSideBar} />
                </div>
            )}
        </div>
    );
};

export default SideBar;
