import { useDispatch, useSelector } from 'react-redux';
import LoadingBar from 'react-top-loading-bar';
import { resetProgress } from '../features/YouTube/youtubeSlice';

const Loader = () => {
    const { progress } = useSelector((state) => state.youtubeApp);
    const dispatch = useDispatch();
    return (
        // <div className='load-bar'>
        //     <div className='bar'></div>
        //     <div className='bar'></div>
        //     <div className='bar'></div>
        // </div>
        <LoadingBar
            color='#f11946'
            progress={progress}
            onLoaderFinished={() => dispatch(resetProgress())}
        />
    );
};

export default Loader;
