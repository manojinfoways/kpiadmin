import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const sliceName = "taskSlice";


export const fetchUserAssignedTasks = createAsyncThunk(
  `${sliceName}/fetchUserAssignedTasks`,
  async (payload) => {
    //taskID:taskID,userID:userId
    try {
      let url = `/task/surveylocations/withusers?taskId=${payload.taskID}&userId=${payload.userID}`;
      if (payload.taskID=="") {
        url = `/task/surveylocations/withusers?userId=${payload.userID}`;
      }
      const { data } = await axios.get(url);
      return {
        userAssignedTasks: data.data,
      };
    } catch (e) {
      console.log("Master",e.message);
      return {
        error: e.message,
        userAssignedTasks: [],
      };
    }
  }
);

export const fetchAssignedTasks = createAsyncThunk(
  `${sliceName}/fetchAssignedTasks`,
  async (taskID) => {
    try {
      console.log("GET BITS", taskID);
      const { data } = await axios.get(
        `/task/surveylocations/withusers?taskId=${taskID}`
      );
      return {
        assignedTasks: data.data,
      };
    } catch (e) {
      return {
        error: e.message,
        assignedTasks: [],
      };
    }
  }
);

export const fetchAllAssignedUnassigenTasks = createAsyncThunk(
  `${sliceName}/fetchAllAssignedUnassigenTasks`,
  async (item) => {
    try {
      let choiceIds = item.choiceIds;
      // let status = item.status?item.status:'';
      let status = '';
      choiceIds = typeof choiceIds === 'object' ? choiceIds.join(',') : choiceIds
      console.log("Check chi",choiceIds);
      let url = `/task/surveylocations/withusers?surveyId=${item.surveyID}&questionIds=${item.questionID}`;
      if (item.questionID=='0' || item.questionID==0) {
          url = `/task/surveylocations/withusers?surveyId=${item.surveyID}`;
      }  
      if (choiceIds != "") {
          url = `/task/surveylocations/withusers?surveyId=${item.surveyID}&questionIds=${item.questionID}&choiceIds=${choiceIds}`;
      }
      const { data } = await axios.get(
        url
      );
      console.log("Bhole banke",data);
      return {
        assignedUnassignedTasks: data.data,
      };
    } catch (e) {
      return {
        error: e.message,
        assignedUnassignedTasks: [],
      };
    }
  }
);

export const fetchTasks = createAsyncThunk(
  `${sliceName}/fetchTasks`,
  async (type) => {
    try {
      let url = `/task/all/${type}`;
      if (type == 'all') {
        url = `/task/all`;
      }
      const { data } = await axios.get(url);
      return {
        taskList: data.data,
      };
    } catch (e) {
      return {
        error: e.message,
        taskList: [],
      };
    }
  }
);

export const fetchModeratorsWorkLoad = createAsyncThunk(
  `${sliceName}/fetchModerators`,
  async () => {
    try {
      const { data } = await axios.get(`/task/taskassignment/workload`);
      return {
        moderatorsWorkLoadList: data,
      };
    } catch (e) {
      return {
        error: e.message,
        moderatorsWorkLoadList: [],
      };
    }
  }
);
export const fetchModerators = createAsyncThunk(
  `${sliceName}/fetchModerators`,
  async () => {
    try {
      const { data } = await axios.get(`/user/all/active`);
      let moderators = data.data.filter((i) =>
        i.roles.find((j) => j.name == "moderator")
      );
      return {
        moderatorsList: moderators,
      };
    } catch (e) {
      return {
        error: e.message,
        moderatorsList: [],
      };
    }
  }
);

const surveySlice = createSlice({
  name: sliceName,
  initialState: {
    taskList: [],
    moderatorsList: [],
    assignedTasks: [],
    assignedUnassignedTasks: [],
    moderatorsWorkLoadList:[]
  },
  extraReducers: {
    [fetchTasks.fulfilled]: (state, action) => {
      state.taskList = action.payload.taskList;
    },
    [fetchAllAssignedUnassigenTasks.fulfilled]: (state, action) => {
      state.assignedUnassignedTasks = action.payload.assignedUnassignedTasks;
    },
    [fetchAssignedTasks.fulfilled]: (state, action) => {
      state.assignedTasks = action.payload.assignedTasks;
    },
    [fetchUserAssignedTasks.fulfilled]: (state, action) => {
      state.userAssignedTasks = action.payload.userAssignedTasks;
    },
    [fetchModerators.fulfilled]: (state, action) => {
      state.moderatorsList = action.payload.moderatorsList;
    },
    [fetchModeratorsWorkLoad.fulfilled]: (state, action) => {
      state.moderatorsWorkLoadList = action.payload.moderatorsWorkLoadList;
    },
    
  },
});

export default surveySlice.reducer;
