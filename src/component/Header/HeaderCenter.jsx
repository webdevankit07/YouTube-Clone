import PropTypes from 'prop-types';
import { IoIosSearch } from 'react-icons/io';
import { MdKeyboardVoice } from 'react-icons/md';

const HeaderCenter = ({ searchQuery, searchQueryHandler, setSearchQuery }) => {
    return (
        <div>
            <div className='items-center hidden md:flex group'>
                <div className='w-full flex ml-10 pl-5 bg-white/[0.05] border border-[#303030] rounded-r-none rounded-l-3xl group-focus-within:border-blue-500 group-focus-within:ml-5 group-focus-within:pl-0'>
                    <div className='items-center justify-center hidden w-10 group-focus-within:flex'>
                        <IoIosSearch className='text-xl text-white' />
                    </div>
                    <input
                        type='text'
                        className='bg-transparent outline-none text-base py-1.5 lg:py-2 text-white pr-5 pl-1 w-80 lg:w-[450px]'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder='Search YouTube'
                        onKeyUp={searchQueryHandler}
                    />
                </div>
                <button
                    id='search-button'
                    className='flex w-[60px] lg:w-[80px] py-2 lg:py-2.5 items-center justify-center border border-l-0 border-[#303030] rounded-r-3xl bg-white/[0.1]'
                    onClick={searchQueryHandler}
                >
                    <IoIosSearch id='searchButton' className='text-xl text-white' />
                </button>
                <div className=' hidden lg:flex ml-3 items-center justify-center p-2 rounded-full bg-[#303030]/[0.6] active:bg-[#303030]/[0.9] cursor-pointer transition-all delay-75'>
                    <MdKeyboardVoice className='text-2xl text-white cursor-pointer' />
                </div>
            </div>
            <div className='hidden w-[20rem] sm:flex items-center mt-0.5 md:hidden bg-white/[0.1] border-[#303030] rounded-2xl'>
                <input
                    type='text'
                    className='w-full py-2 pl-5 pr-5 text-sm text-white bg-transparent outline-none'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder='Search YouTube'
                    onKeyUp={searchQueryHandler}
                />
            </div>
        </div>
    );
};

HeaderCenter.propTypes = {
    searchQuery: PropTypes.string.isRequired,
    searchQueryHandler: PropTypes.func.isRequired,
    setSearchQuery: PropTypes.func.isRequired,
};

export default HeaderCenter;
