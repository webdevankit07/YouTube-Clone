import { FaRegCompass } from 'react-icons/fa';
import { selectSearchTerms } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import {
    clearVideos,
    setDetailSideBar,
    setSelectedSearchTerm,
} from '../features/YouTube/youtubeSlice';

const SearchTerms = () => {
    const { selectedSearchTerm } = useSelector((state) => state.youtubeApp);
    const dispatch = useDispatch();

    const searchHandler = (term) => {
        dispatch(clearVideos());
        dispatch(setSelectedSearchTerm(term));
    };

    return (
        <div>
            <div className='flex items-center p-2 overflow-x-auto scrollBar-none'>
                <button
                    className='md:hidden text-white text-xl px-3 py-1.5 bg-white/[0.1] rounded-sm'
                    onClick={() => dispatch(setDetailSideBar(true))}
                >
                    <FaRegCompass />
                </button>
                <div className='flex items-center gap-2 ml-4 md:m-3'>
                    {selectSearchTerms.map((term) => (
                        <button
                            key={Math.floor(Math.random() * 10000)}
                            className={`text-xs min-w-max text-justify md:text-base transition-all delay-75 px-3 py-2 rounded-lg ${
                                selectedSearchTerm === term
                                    ? 'bg-white/[1]  font-semibold text-black hover:bg-white/[1]'
                                    : 'bg-white/[0.1] text-white hover:bg-white/[0.2]'
                            }`}
                            onClick={() => searchHandler(term)}
                        >
                            {term}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SearchTerms;
