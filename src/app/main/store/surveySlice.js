import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const sliceName = "surveySlice";

export const fetchStatisticData = createAsyncThunk(
  `${sliceName}/fetchStatisticData`,
  async (statusId) => {
    try {
      axios = axios.create({baseURL: "http://youradress"});
      let  data  = await axios.get(`surveylocation/stats/15/days`);
      if (statusId != 'all') {
         data = await axios.get(`surveylocation/stats/15/days?status=${statusId}`);
      }  
      
      
      return {
        statictData: data.data.data,
      };
    } catch (e) {
      return {
        error: e.message,
        statictData: [],
      };
    }
  }
);

export const fetchStatusListData = createAsyncThunk(
  `${sliceName}/fetchStatusListData`,
  async (questionId) => {
    try {
      axios.defaults.baseURL = 'https://survey.mgtechx.com/api/';
      const { data } = await axios.get(`legendmaster/all`);
      return {
        statusData: data.data,
      };
    } catch (e) {
      return {
        error: e.message,
        statusData: [],
      };
    }
  }
);

 
export const fetchChartData = createAsyncThunk(
  `${sliceName}/fetchChartData`,
  async (questionId) => {
    try {
      axios.defaults.baseURL = 'https://survey.mgtechx.com/api/';
      const { data } = await axios.get(
        `/questionresponse/statics/byquestions?questionIds=${questionId}`
      );
      return {
        chartData: data.data,
      };
    } catch (e) {
      return {
        error: e.message,
        chartData: [],
      };
    }
  }
);

export const fetchMapData = createAsyncThunk(
  `${sliceName}/fetchMapData`,
  async (payload) => {
    try {
      let locationId= payload.locationId;
      let questionIds = payload.questionIds;

      axios.defaults.baseURL = 'https://survey.mgtechx.com/api/';
      const { data } = await axios.get(
        `/questionresponse/statics/byquestions?questionIds=${questionIds}&surveyLocationIds=${locationId}`
      );
      return {
        mapData: data.data,
      };
    } catch (e) {
      return {
        error: e.message,
        mapData: [],
      };
    }
  }
);

export const fetchSurveyList = createAsyncThunk(
  `${sliceName}/fetchSurveyList`,
  async (surveyId) => {
    try {
      
      axios.defaults.baseURL = 'https://survey.mgtechx.com/api/';
      const { data } = await axios.get(`/survey/all/active`);
      return {
        surveyListState: data.data,
      };
    } catch (e) {
      return {
        error: e.message,
        surveyListState: [],
      };
    }
  }
);

export const fetchQuestionList = createAsyncThunk(
  `${sliceName}/fetchQuestionList`,
  async (surveyId) => {
    try {
      axios.defaults.baseURL = 'https://survey.mgtechx.com/api/';
      const { data } = await axios.get(`/survey/find/${surveyId}`);
      return {
        questionsList: data,
      };
    } catch (e) {
      return {
        error: e.message,
        questionsList: [],
      };
    }
  }
);

export const fetchQuestionTypes = createAsyncThunk(
  `${sliceName}/fetchQuestionTypes`,
  async () => {
    try {
      axios.defaults.baseURL = 'https://survey.mgtechx.com/api/';
      const { data } = await axios.get(`/questiontype/all/active`);
      return {
        questionType: data.data,
      };
    } catch (e) {
      return {
        error: e.message,
        questionType: [],
      };
    }
  }
);

export const setSelectedObj = createAsyncThunk(
  `${sliceName}/setSelectedObj`,
  async (data) => {
    try {
      return {
        selectedObj: data
      };
    } catch (e) {
      return {
        error: e.message,
        selectedObj: [],
      };
    }
  }
);


export const fetchLocationLengend = createAsyncThunk(
  `${sliceName}/fetchLocationLengend`,
  async () => {
    try {

      axios.defaults.baseURL = 'https://survey.mgtechx.com/api/';
      const { data } = await axios.get(`/legendmaster/all`);
      return {
        legendList: data.data,
      };
    } catch (e) {
      return {
        error: e.message,
        legendList: [],
      };
    }
  }
);

export const fetchLocationStateCount = createAsyncThunk(
  `${sliceName}/fetchLocationStateCount`,
  async (payload) => {
    try {
      const { data } = await axios.get(`/surveylocation/stats/bystatus/count?surveyId=${payload.surveyId}&startDate=${payload.startDate}&endDate=${payload.startDate}`);
      return {
        locationStateCountList: data.data,
      };
    } catch (e) {
      return {
        error: e.message,
        locationStateCountList: [],
      };
    }
  }
);
export const fetchVillages = createAsyncThunk(
  `${sliceName}/fetchVillages`,
  async () => {
    try {
      const { data } = await axios.get(`/villages/list`);
      return {
        villageList: data.data,
      };
    } catch (e) {
      return {
        error: e.message,
        villageList: [],
      };
    }
  }
);

const surveySlice = createSlice({
  name: sliceName,
  initialState: {
    questions: [],
    questionTypes: [],
    surveyList: [],
    chartData: [],
    statictData: [],
    mapData: [],
    selectedObj: [],
    villageList: [],
    statusData: [],
    locationStateCountList: [],
    legendList:[]
    
  },

 
  extraReducers: {
    
    [fetchVillages.fulfilled]: (state, action) => {
      state.villageList = action.payload.villageList;
    },
    [setSelectedObj.fulfilled]: (state, action) => {
      state.selectedObj = action.payload.selectedObj;
    },
    [fetchQuestionList.fulfilled]: (state, action) => {
      state.questions = action.payload.questionsList;
    },
    [fetchSurveyList.fulfilled]: (state, action) => {
      state.surveyList = action.payload.surveyListState;
    },
    [fetchQuestionTypes.fulfilled]: (state, action) => {
      state.questionTypes = action.payload.questionType;
    },
    [fetchChartData.fulfilled]: (state, action) => {
      state.chartData = action.payload.chartData;
    },
    [fetchStatisticData.fulfilled]: (state, action) => {
      state.statictData = action.payload.statictData;
    },
    [fetchStatusListData.fulfilled]: (state, action) => {
      state.statusData = action.payload.statusData;
    },
    
    [fetchLocationLengend.fulfilled]: (state, action) => {
      state.legendList = action.payload.legendList;
    },
    [fetchLocationStateCount.fulfilled]: (state, action) => {
      state.locationStateCountList = action.payload.locationStateCountList;
    },
    [fetchMapData.fulfilled]: (state, action) => {
        state.mapData = action.payload.mapData;
        },
      
  },
});

export default surveySlice.reducer;
