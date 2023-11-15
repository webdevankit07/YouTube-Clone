import { createSlice } from '@reduxjs/toolkit';
import { getHomePageVideos } from '../../store/reducers/getHomePageVideos';
import { getSearchPageVideos } from '../../store/reducers/getSearchPageVideos';
import { getRecommendedVideos } from '../../store/reducers/getRecommendedVideos';
import { getVideoDetails } from '../../store/reducers/getVideoDetails';

//! initialize State....
const initialState = {
    loading: false,
    progress: 0,
    detailSideBar: false,
    footerCreativeSection: false,
    videos: [],
    searchedVideos: [],
    recomendedVideos: [],
    currentPlaying: null,
    searchTerm: '',
    category: 'New',
    selectedMenu: 'New',
    selectedSearchTerm: 'All',
    nextPageToken: null,
};
const youtubeAppSlice = createSlice({
    name: 'youtubeApp',
    initialState,
    reducers: {
        setLoading: (state, { payload }) => {
            state.loading = payload;
        },
        resetProgress: (state) => {
            state.progress = 0;
        },
        setDetailSideBar: (state, { payload }) => {
            state.detailSideBar = payload;
        },
        setFooterCreativeSection: (state, { payload }) => {
            state.footerCreativeSection = payload;
        },
        clearVideos: (state) => {
            state.videos = [];
            state.nextPageToken = null;
        },
        clearSearchedVideos: (state) => {
            state.searchedVideos = [];
            state.nextPageToken = null;
        },
        setSearchTerm: (state, { payload }) => {
            state.searchTerm = payload;
        },
        setCategory: (state, { payload }) => {
            state.category = payload;
        },
        setSelectedMenu: (state, { payload }) => {
            state.selectedMenu = payload;
        },
        setSelectedSearchTerm: (state, { payload }) => {
            state.selectedSearchTerm = payload;
            state.category = payload;
        },
    },
    extraReducers: (builder) => {
        //! ........... Get HomePage Videos .............
        builder
            .addCase(getHomePageVideos.pending, (state) => {
                state.loading = true;
                state.progress = 60;
            })
            .addCase(getHomePageVideos.fulfilled, (state, { payload }) => {
                if (payload && payload.parsedData) {
                    state.progress = 100;
                    state.videos = payload.parsedData;
                    state.nextPageToken = payload.nextPageToken;
                }
                state.loading = false;
            })
            .addCase(getHomePageVideos.rejected, (state, { payload }) => {
                console.log(payload);
                state.loading = false;
            });

        //! ........... Get SearchPage Videos .............
        builder
            .addCase(getSearchPageVideos.pending, (state) => {
                state.loading = true;
                state.progress = 60;
            })
            .addCase(getSearchPageVideos.fulfilled, (state, { payload }) => {
                if (payload && payload.parsedData) {
                    state.progress = 100;
                    state.searchedVideos = payload.parsedData;
                    state.nextPageToken = payload.nextPageToken;
                }
                state.loading = false;
            })
            .addCase(getSearchPageVideos.rejected, (state, { payload }) => {
                console.log(payload);
                state.loading = false;
            });

        //! ........... Get Recommended Videos .............
        builder
            .addCase(getRecommendedVideos.pending, (state) => {
                state.loading = true;
                state.progress = 60;
            })
            .addCase(getRecommendedVideos.fulfilled, (state, { payload }) => {
                if (payload) {
                    state.recomendedVideos = payload;
                    state.progress = 100;
                }
                state.loading = false;
            })
            .addCase(getRecommendedVideos.rejected, (state, { payload }) => {
                console.log(payload);
                state.loading = false;
            });

        //! ........... Get Video Details ...............
        builder
            .addCase(getVideoDetails.pending, (state) => {
                state.loading = true;
                state.progress = 60;
            })
            .addCase(getVideoDetails.fulfilled, (state, { payload }) => {
                if (payload) {
                    state.progress = 100;

                    state.currentPlaying = payload;
                }
                state.loading = false;
            })
            .addCase(getVideoDetails.rejected, (state, { payload }) => {
                console.log(payload);
                state.loading = false;
            });
    },
});

export default youtubeAppSlice.reducer;
export const {
    setLoading,
    resetProgress,
    setDetailSideBar,
    setFooterCreativeSection,
    clearVideos,
    clearSearchedVideos,
    setSearchTerm,
    setCategory,
    setSelectedMenu,
    setSelectedSearchTerm,
} = youtubeAppSlice.actions;
