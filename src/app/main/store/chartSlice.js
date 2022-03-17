import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

const sliceName = 'surveySlice';


export const fetchDashboardTaskStatusChartData = createAsyncThunk(
    `${sliceName}/fetchDashboardTaskStatusChartData`,
    async (surveyID) => {
      try {
        const { data } = await axios.get(
          `/task/surveylocations/stats/bystatus/count?taskId=${surveyID}`
        );
        return {
            taskStatusData: data.data,
        };
      } catch (e) {
        return {
          error: e.message,
          taskStatusData: [],
        };
      }
    }
);
  
export const fetchdLocationStatusdChartData = createAsyncThunk(
    `${sliceName}/fetchdLocationStatusdChartData`,
    async (surveyID) => {
      try {
        const { data } = await axios.get(
          `/surveylocation/stats/bystatus/count?surveyId=${surveyID}`
        );
        return {
            locationStatusChart: data.data,
        };
      } catch (e) {
        return {
          error: e.message,
          locationStatusChart: [],
        };
      }
    }
  );

 

export const fetchChartSankey = createAsyncThunk(`${sliceName}/fetchChartSankey`, async (questionId) => {
    try {
        console.log("questionId", questionId);
        // http://localhost:8080/api/questionresponse/snakystatics/byquestions?questionIds=73%2C6%2C13
        const { data } = await axios.get(`/questionresponse/snakystatics/byquestions?questionIds=${questionId}`);
        return {
            chartSankey: data.data
        };
    } catch (e) {
        return {
            error: e.message,
            chartSankey: []
        };
    }
});

export const fetchdownLoadCompletedData = createAsyncThunk(`${sliceName}/fetchdownLoadCompletedData`, async (item) => {
    try {
        console.log("choiceIdsXXxxxx", item.choiceIds);
        let choiceIds = item.choiceIds;
        let status = item.status?item.status:'';
        choiceIds = typeof choiceIds === 'object' ? choiceIds.join(',') : choiceIds
        console.log("Check chi",choiceIds);
        let url = `questionresponse/report/${item.surveyID}?questionIds=${item.questionID}&status=${status}`;
        if (item.questionID=='0' || item.questionID==0) {
            url = `questionresponse/report/${item.surveyID}?status=${status}`;
        }  
        if (choiceIds != "") {
            url = `questionresponse/report/${item.surveyID}?questionIds=${item.questionID}&choiceIds=${choiceIds}&status=${status}`;
        }
        const { data } = await axios.get(url);
        return {
            downLoadCompletedData: data.data
        };
    } catch (e) {
        return {
            error: e.message,
            downLoadCompletedData: []
        };
    }
});



export const fetchdownLoadData = createAsyncThunk(`${sliceName}/fetchdownLoadData`, async (item) => {
    try {
        console.log("choiceIdsXXxxxx", item.choiceIds);
        let choiceIds = item.choiceIds;

        if (item.choiceIds === undefined) {
            choiceIds = "";
        } 
        choiceIds = typeof choiceIds === 'object' ? choiceIds.join(',') : choiceIds
        if (choiceIds === undefined) {
            choiceIds = "";
        }
       
        let url = `questionresponse/report/${item.surveyID}?questionIds=${item.questionID}`;
        if (item.questionID=='0' || item.questionID==0) {
            url = `questionresponse/report/${item.surveyID}`;
        }  
        if (choiceIds != "") {
            url = `questionresponse/report/${item.surveyID}?questionIds=${item.questionID}&choiceIds=${choiceIds}`;
        }
        const { data } = await axios.get(url);
        return {
            downLoadData: data.data
        };
    } catch (e) {
        return {
            error: e.message,
            downLoadData: []
        };
    }
});


export const fetchChartData73 = createAsyncThunk(`${sliceName}/fetchChartData73`, async () => {
    try {
        const { data } = await axios.get(`/questionresponse/statics/byquestions?questionIds=73`);
        return {
            chartData73: data.data
        };
    } catch (e) {
        return {
            error: e.message,
            chartData73: []
        };
    }
});

export const fetchChartData42 = createAsyncThunk(`${sliceName}/fetchChartData42`, async (questionId) => {
    try {
        const { data } = await axios.get(`/questionresponse/statics/byquestions?questionIds=42`);
        return {
            chartData42: data.data
        };
    } catch (e) {
        return {
            error: e.message,
            chartData42: []
        };
    }
});

export const fetchChartData47 = createAsyncThunk(`${sliceName}/fetchChartData47`, async (questionId) => {
    try {
        const { data } = await axios.get(`/questionresponse/statics/byquestions?questionIds=47`);
        return {
            chartData47: data.data
        };
    } catch (e) {
        return {
            error: e.message,
            chartData47: []
        };
    }
});




const surveySlice = createSlice({
    name: sliceName,
    initialState: {
        chartData42: [],
        chartData47: [],
        chartData73: [],
        downLoadData: [],
        chartSankey: [],
        downLoadCompletedData: [],
        locationStatusChart: [],
        taskStatusData:[]
    },
    extraReducers: {
        
        [fetchDashboardTaskStatusChartData.fulfilled]: (state, action) => {
            state.taskStatusData = action.payload.taskStatusData;
        },
        [fetchdLocationStatusdChartData.fulfilled]: (state, action) => {
            state.locationStatusChart = action.payload.locationStatusChart;
        },
        
        [fetchChartSankey.fulfilled]: (state, action) => {
            state.chartSankey = action.payload.chartSankey;
        },
        
        [fetchdownLoadCompletedData.fulfilled]: (state, action) => {
            state.downLoadCompletedData = action.payload.downLoadCompletedData;
        },
        [fetchdownLoadData.fulfilled]: (state, action) => {
            state.downLoadData = action.payload.downLoadData;
        },
        [fetchChartData42.fulfilled]: (state, action) => {
            state.chartData42 = action.payload.chartData42;
        },
        [fetchChartData47.fulfilled]: (state, action) => {
            state.chartData47 = action.payload.chartData47;
        },
        
        [fetchChartData73.fulfilled]: (state, action) => {
            state.chartData73 = action.payload.chartData73;
        },
    }
});

export default surveySlice.reducer;
