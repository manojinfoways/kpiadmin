import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

const sliceName = 'kplAnalyticsSlice';
export const fetchDependancy = createAsyncThunk(`${sliceName}/fetchDependancy`, async (questionId) => {
    try {
        const { data } = await axios.get(`/questionresponse/statics/byquestions?questionIds=42`);
        return {
            dependancy: data.data
        };
    } catch (e) {
        return {
            error: e.message,
            dependancy: []
        };
    }
});

const surveySlice = createSlice({
    name: sliceName,
    initialState: {
        dependancy: [],
    },
    extraReducers: {
        [fetchDependancy.fulfilled]: (state, action) => {
            state.dependancy = action.payload.dependancy;
        },
       
    }
});

export default surveySlice.reducer;
