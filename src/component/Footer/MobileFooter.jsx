import { useDispatch, useSelector } from 'react-redux';
import { GoHomeFill } from 'react-icons/go';
import { BiUserCircle } from 'react-icons/bi';
import { MdOutlineSubscriptions } from 'react-icons/md';
import { SiGradleplaypublisher } from 'react-icons/si';
import { CiCirclePlus } from 'react-icons/ci';
import {
    clearVideos,
    setCategory,
    setFooterCreativeSection,
} from '../../features/YouTube/youtubeSlice';
import { useNavigate } from 'react-router-dom';
import { signInWIthGoogle } from '../../features/FireBase/firebaseSlice';

const MobileFooter = () => {
    const { login, userPhotoURL } = useSelector((state) => state.firebaseSlice);
    const { category } = useSelector((state) => state.youtubeApp);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleCategory = (term) => {
        navigate('/');
        if (category !== term) {
            dispatch(clearVideos());
            dispatch(setCategory(term));
        }
    };

    return (
        <div className='sticky z-30 w-full text-white bg-black -bottom-0.5 sm:hidden'>
            <div className='flex items-center justify-between px-3 py-0.5'>
                <div
                    className='flex flex-col items-center justify-center'
                    onClick={() => handleCategory('New')}
                >
                    <GoHomeFill className='text-xl' />
                    <p className='text-[10px] font-thin'>Home</p>
                </div>
                <div
                    className='flex flex-col items-center justify-center'
                    onClick={() => handleCategory('shorts')}
                >
                    <SiGradleplaypublisher className='text-xl' />
                    <p className='text-[10px] font-thin'>Shorts</p>
                </div>
                <div
                    className='flex flex-col items-center justify-center'
                    onClick={() => dispatch(setFooterCreativeSection(true))}
                >
                    <CiCirclePlus className='text-4xl' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <MdOutlineSubscriptions className='text-xl' />
                    <p className='text-[10px] font-thin'>Subscription</p>
                </div>
                <div>
                    <div>
                        {login ? (
                            <img src={userPhotoURL} className='w-6' alt='userPhoto' />
                        ) : (
                            <BiUserCircle
                                className='w-6 text-2xl text-blue-700'
                                onClick={() => dispatch(signInWIthGoogle())}
                            />
                        )}
                    </div>
                    <p className='text-xs text-center'>{login ? 'You' : 'LogIn'}</p>
                </div>
            </div>
        </div>
    );
};

export default MobileFooter;
