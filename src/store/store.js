import { configureStore } from '@reduxjs/toolkit';
import youtubeAppSlice from '../features/YouTube/youtubeSlice';
import firebaseSlice from '../features/FireBase/firebaseSlice';

const store = configureStore({
    reducer: {
        youtubeApp: youtubeAppSlice,
        firebaseSlice: firebaseSlice,
    },
});

export default store;
