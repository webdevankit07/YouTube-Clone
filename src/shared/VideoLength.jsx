import PropTypes from 'prop-types';

const VideoLength = ({ time }) => {
    return (
        <div className='absolute px-2 py-1 text-[10px] font-medium text-white bg-black rounded-md md:text-sm bottom-2 right-2 '>
            {time}
        </div>
    );
};

VideoLength.propTypes = {
    time: PropTypes.string,
};

export default VideoLength;
