import { createSlice } from '@reduxjs/toolkit';
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyCV1fCY7bjdHsntpomoohqlGwKCK9M2Rkg',
    authDomain: 'clone-9d254.firebaseapp.com',
    projectId: 'clone-9d254',
    storageBucket: 'clone-9d254.appspot.com',
    messagingSenderId: '625129284328',
    appId: '1:625129284328:web:8a42204e07d4d7a8f99f5d',
};

//! Instance...
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const googleProvider = new GoogleAuthProvider();
googleProvider.addScope('https://www.googleapis.com/auth/youtube.force-ssl');

//! ......... Firebase Slice ...........
const initialState = {
    login: false,
    userName: null,
    userEmail: null,
    userId: null,
    userPhotoURL: null,
};
const firebaseSlice = createSlice({
    name: 'firebaseSlice',
    initialState,
    reducers: {
        setLoginState: (state, { payload }) => {
            state.login = payload;
        },
        setUserData: (state, { payload }) => {
            state.userName = payload.userName;
            state.userEmail = payload.userEmail;
            state.userId = payload.userId;
            state.userPhotoURL = payload.photoURL;
        },
        signInWIthGoogle: () => {
            signInWithPopup(firebaseAuth, googleProvider);
        },
    },
});

export default firebaseSlice.reducer;
export const { setLoginState, setUserData, signInWIthGoogle } = firebaseSlice.actions;
