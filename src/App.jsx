import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//!components...
import Header from './component/Header/Header';
import Feed from './pages/Feed';
import SearchResult from './pages/SearchResult';
import VideoDetails from './pages/VideoDetails';
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth, setLoginState, setUserData } from './features/FireBase/firebaseSlice';
import MobileFooter from './component/Footer/MobileFooter';

const App = () => {
    const { login } = useSelector((state) => state.firebaseSlice);
    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged(firebaseAuth, (user) => {
            const userData = {
                userName: user ? user.displayName : null,
                userEmail: user ? user.email : null,
                userId: user ? user.uid : null,
                photoURL: user ? user.photoURL : null,
            };
            dispatch(setLoginState(user ? true : false));
            dispatch(setUserData(userData));
        });
    }, [login, dispatch]);

    return (
        <Router>
            {/* <div className='flex flex-col h-full'> */}
            <Header />
            <Routes>
                <Route path='/' element={<Feed />} />
                <Route path='/search/:searchQuery' element={<SearchResult />} />
                <Route path='/video/:id' element={<VideoDetails />} />
            </Routes>
            <MobileFooter />
            {/* </div> */}
        </Router>
    );
};

export default App;
