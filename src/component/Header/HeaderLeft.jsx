import PropTypes from 'prop-types';

//! .......... React-Icons ...........
import { SlMenu } from 'react-icons/sl';
import { Link } from 'react-router-dom';

//! .......... Yt-Logo ...........
import ytLogo from '../../images/yt-logo.png';

const HeaderLeft = ({ sideBarMenuToggle }) => {
    return (
        <>
            <div className='flex items-center'>
                <div
                    className='hidden sm:flex mr-2 cursor-pointer items-center justify-center p-3 rounded-full hover:bg-[#303030]/[0.6] active:bg-[#303030]/[0.9]'
                    onClick={sideBarMenuToggle}
                >
                    <SlMenu className='text-white sm:text-base md:text-lg' />
                </div>
                <Link to={'/'} className='sm:mr-0'>
                    <img className='h-4 md:h-5' src={ytLogo} alt={'YouTube'} />
                </Link>
            </div>
        </>
    );
};

HeaderLeft.propTypes = {
    sideBarMenuToggle: PropTypes.func.isRequired,
};

export default HeaderLeft;
