import { useDispatch, useSelector } from 'react-redux';
import MenuItems from './MenuItems';
import {
    clearVideos,
    setCategory,
    setDetailSideBar,
    setSelectedMenu,
} from '../../features/YouTube/youtubeSlice';
import { exploreSection, moreSection } from '../../utils/constants';
import { firebaseAuth, signInWIthGoogle } from '../../features/FireBase/firebaseSlice';
import { signOut } from 'firebase/auth';
import { IoLogOutOutline } from 'react-icons/io5';
import { BiLogIn } from 'react-icons/bi';
import Footer from '../Footer';
import ytLogo from '../../images/yt-logo.png';

const MobileSideBar = () => {
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
        <>
            {detailSideBar && (
                <div
                    className='absolute top-0 left-0 w-full h-[100vh] bg-black/[0.5] sm:hidden'
                    onClick={() => dispatch(setDetailSideBar(false))}
                >
                    <div
                        className={`px-3 py-6 bg-black w-64 h-full transition-all delay-700 overflow-y-auto ${
                            detailSideBar ? 'translate-x-0' : '-translate-x-52'
                        }`}
                    >
                        <div className='px-3 mb-6 w-28'>
                            <img src={ytLogo} alt='logo' />
                        </div>
                        {/* //! ...... Explore Section ...... */}
                        <div>
                            <MenuItems clickHandler={clickHandler} items={exploreSection} />
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
                        <hr className='my-2 sm:my-3 md:my-4 border-white/[0.2]' />

                        {/* //! ...... More - Section ...... */}
                        <div>
                            <MenuItems clickHandler={clickHandler} items={moreSection} />
                        </div>

                        {/* //! ...... Footer-Section ...... */}
                        <div className=' text-white/[0.5]'>
                            <Footer />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default MobileSideBar;
