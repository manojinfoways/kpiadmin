import { combineReducers } from '@reduxjs/toolkit';
import auth from 'app/auth/store';
import fuse from './fuse';
import ptr from './ptr';
  import kplAnalytics from 'app/main/store/kplAnalyticsSlice';
  import chart from 'app/main/store/chartSlice';
  import survey from 'app/main/store/surveySlice';
  import task from 'app/main/store/taskSlice';

import i18n from "./i18nSlice";

const createReducer = (asyncReducers) => (state, action) => {
  const combinedReducer = combineReducers({
    chart,
    kplAnalytics,
    survey,
    task,
    auth,
    fuse,
    ptr,
    i18n,
    ...asyncReducers,
  });

  /*
	Reset the redux store when user logged out
	 */
  if (action.type === "auth/user/userLoggedOut") {
    state = undefined;
  }

  return combinedReducer(state, action);
};

export default createReducer;
