import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { signInWIthGoogle } from '../../features/FireBase/firebaseSlice';

//! ............. React-Icons .................
import { RiVideoAddLine } from 'react-icons/ri';
import { PiScreencastLight } from 'react-icons/pi';
import { FiBell } from 'react-icons/fi';
import { IoIosSearch } from 'react-icons/io';
import { BiUserCircle } from 'react-icons/bi';
import { useState } from 'react';
import UserCard from './UserCard';

const HeaderRight = ({ setOpenSearch }) => {
    const { login, userPhotoURL } = useSelector((state) => state.firebaseSlice);
    const [userCard, setUserCard] = useState(false);
    const dispatch = useDispatch();

    return (
        <div>
            <div className='flex items-center'>
                {userCard && <UserCard setUserCard={setUserCard} />}
                <div className='flex items-center justify-center gap-1 sm:hidden'>
                    <div className='flex items-center justify-center p-2.5 rounded-full hover:bg-[#303030]/[0.6]'>
                        <PiScreencastLight className='text-xl text-white cursor-pointer lg:text-xl' />
                    </div>
                    <div className='flex items-center justify-center p-2.5 rounded-full hover:bg-[#303030]/[0.6]'>
                        <FiBell className='text-lg text-white cursor-pointer lg:text-xl' />
                    </div>
                    <div
                        className='flex items-center justify-center p-2.5 rounded-full hover:bg-[#303030]/[0.6]'
                        onClick={() => setOpenSearch(true)}
                    >
                        <IoIosSearch className='text-lg text-white cursor-pointer lg:text-xl' />
                    </div>
                </div>
                {login ? (
                    <div className='items-center justify-center hidden gap-2 sm:flex'>
                        <div className='flex items-center justify-center p-2.5 rounded-full hover:bg-[#303030]/[0.6]'>
                            <RiVideoAddLine className='text-lg text-white cursor-pointer lg:text-xl' />
                        </div>
                        <div className='flex items-center justify-center p-2.5  rounded-full hover:bg-[#303030]/[0.6]'>
                            <FiBell className='text-lg text-white cursor-pointer lg:text-xl' />
                        </div>
                        <div
                            className='flex items-center justify-center object-cover ml-2 cursor-pointer'
                            onClick={() => setUserCard((prev) => !prev)}
                        >
                            <img src={userPhotoURL} alt='userPhoto' className='w-7' />
                        </div>
                    </div>
                ) : (
                    <div
                        className='text-blue-500 hidden md:flex items-center gap-2 ml-2 md:ml-0 md:border border-white/[0.2] rounded-full md:px-4 md:py-1.5 cursor-pointer font-semibold text-sm'
                        onClick={() => dispatch(signInWIthGoogle())}
                    >
                        <BiUserCircle className='text-2xl' />
                        <span className='hidden md:inline'>Sign in</span>
                    </div>
                )}
            </div>
        </div>
    );
};

HeaderRight.propTypes = {
    setOpenSearch: PropTypes.func.isRequired,
};

export default HeaderRight;
