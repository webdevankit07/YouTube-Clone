import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { FaBan, FaGoogle, FaRegKeyboard } from 'react-icons/fa6';
import { MdOutlineSwitchAccount } from 'react-icons/md';
import { PiSignOut } from 'react-icons/pi';
import { SiYoutubestudio } from 'react-icons/si';
import { BiDollarCircle } from 'react-icons/bi';
import { RiShieldUserLine } from 'react-icons/ri';
import { GoMoon, GoGlobe } from 'react-icons/go';
import { IoLanguageOutline } from 'react-icons/io5';
import { MdOutlineSettings, MdOutlineFeedback } from 'react-icons/md';
import { IoMdHelpCircleOutline } from 'react-icons/io';
import { signOut } from 'firebase/auth';
import { firebaseAuth } from '../../features/FireBase/firebaseSlice';

const UserCard = ({ setUserCard }) => {
    const { userName, userEmail, userPhotoURL, login } = useSelector(
        (state) => state.firebaseSlice
    );

    const SignOut = () => {
        setUserCard(false);
        signOut(firebaseAuth);
    };

    return (
        login && (
            <div className='absolute py-2 text-white right-6 rounded-xl top-12 bg-[#282828] w-72'>
                <div>
                    <div className='flex gap-3 px-3 py-2'>
                        <div>
                            <img
                                src={userPhotoURL}
                                alt='user-Photo'
                                className='w-10 rounded-full'
                            />
                        </div>
                        <div>
                            <p className='font-semibold'>{userName}</p>
                            <p className='text-sm'>{userEmail}</p>
                            <p className='mt-1 text-sm text-blue-400 cursor-pointer'>
                                View Your Channel
                            </p>
                        </div>
                    </div>
                    <hr className='text-white/[0.1] border-white/[0.3]' />
                    <div className='flex flex-col justify-center gap-1 py-2'>
                        <div className='flex items-center gap-3 px-4 hover:bg-[#3f3f3f] py-2 cursor-pointer'>
                            <FaGoogle className='text-xl' />
                            <p className='text-sm font-semibold'>Google Account</p>
                        </div>
                        <div className='flex items-center gap-3 px-4 hover:bg-[#3f3f3f] py-2 cursor-pointer'>
                            <MdOutlineSwitchAccount className='text-2xl' />
                            <p className='text-sm font-semibold'>Switch Account</p>
                        </div>
                        <div
                            className='flex items-center gap-3 px-4 hover:bg-[#3f3f3f] py-2 cursor-pointer'
                            onClick={SignOut}
                        >
                            <PiSignOut className='text-2xl' />
                            <p className='text-sm font-semibold'>Sign out</p>
                        </div>
                        <hr className='text-white/[0.1] border-white/[0.3]' />

                        <div className='flex items-center gap-3 px-4 hover:bg-[#3f3f3f] py-2 cursor-pointer'>
                            <SiYoutubestudio className='text-xl' />
                            <p className='text-sm font-semibold'>YouTube Studio</p>
                        </div>
                        <div className='flex items-center gap-3 px-4 hover:bg-[#3f3f3f] py-2 cursor-pointer'>
                            <BiDollarCircle className='text-2xl' />
                            <p className='text-sm font-semibold'>Purchases and memberships</p>
                        </div>
                        <hr className='text-white/[0.1] border-white/[0.3]' />

                        <div className='flex items-center gap-3 px-4 hover:bg-[#3f3f3f] py-2 cursor-pointer'>
                            <RiShieldUserLine className='text-2xl' />
                            <p className='text-sm font-semibold'>Your data in YouTube</p>
                        </div>
                        <div className='flex items-center gap-3 px-4 hover:bg-[#3f3f3f] py-2 cursor-pointer'>
                            <GoMoon className='text-2xl' />
                            <p className='text-sm font-semibold'>Appearance: Device theme</p>
                        </div>
                        <div className='flex items-center gap-3 px-4 hover:bg-[#3f3f3f] py-2 cursor-pointer'>
                            <IoLanguageOutline className='text-2xl' />
                            <p className='text-sm font-semibold'>Language: British English</p>
                        </div>
                        <div className='flex items-center gap-3 px-4 hover:bg-[#3f3f3f] py-2 cursor-pointer'>
                            <FaBan className='text-2xl' />
                            <p className='text-sm font-semibold'>Restricted Mode: Off</p>
                        </div>
                        <div className='flex items-center gap-3 px-4 hover:bg-[#3f3f3f] py-2 cursor-pointer'>
                            <GoGlobe className='text-2xl' />
                            <p className='text-sm font-semibold'>Location: India</p>
                        </div>
                        <div className='flex items-center gap-3 px-4 hover:bg-[#3f3f3f] py-2 cursor-pointer'>
                            <FaRegKeyboard className='text-2xl' />
                            <p className='text-sm font-semibold'>Keyboard shortcuts</p>
                        </div>
                        <hr className='text-white/[0.1] border-white/[0.3]' />

                        <div className='flex items-center gap-3 px-4 hover:bg-[#3f3f3f] py-2 cursor-pointer'>
                            <MdOutlineSettings className='text-2xl' />
                            <p className='text-sm font-semibold'>Settings</p>
                        </div>
                        <hr className='text-white/[0.1] border-white/[0.3]' />

                        <div className='flex items-center gap-3 px-4 hover:bg-[#3f3f3f] py-2 cursor-pointer'>
                            <IoMdHelpCircleOutline className='text-2xl' />
                            <p className='text-sm font-semibold'>Help</p>
                        </div>
                        <div className='flex items-center gap-3 px-4 hover:bg-[#3f3f3f] py-2 cursor-pointer'>
                            <MdOutlineFeedback className='text-2xl' />
                            <p className='text-sm font-semibold'>Send feedback</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};

UserCard.propTypes = {
    setUserCard: PropTypes.func.isRequired,
};

export default UserCard;
