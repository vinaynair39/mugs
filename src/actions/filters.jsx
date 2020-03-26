import {ADD_FILTER, SET_END_DATE,SET_START_DATE ,SORT_BY_DATE, SORT_BY_PENDING} from './constants'

export const setTextFilter = (text = '') => ({
    type: ADD_FILTER,
    text: text
});
  
export const setStartDate = startDate => ({
  type: SET_START_DATE,
  startDate
});

export const setEndDate = endDate => ({
  type: SET_END_DATE,
  endDate
});

export const getOnlyPendings = () => ({
  type: SORT_BY_PENDING,
});

export const sortByDate = () => ({
  type: SORT_BY_DATE,
});