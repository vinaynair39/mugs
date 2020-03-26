import moment from 'moment';
import {ADD_FILTER, SET_START_DATE, SET_END_DATE, SORT_BY_DATE, SORT_BY_PENDING} from '../actions/constants'
const defaultFiltersState = {
    text: "",
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
    pending: false
  };
  
  const filterReducer = (state = defaultFiltersState, action) => {
    switch (action.type) {
      case ADD_FILTER:
        return {
          ...state,
          text: action.text
        };
      case SET_START_DATE:
        return {
          ...state,
          startDate: action.startDate
        };
      case SET_END_DATE:
        return {
          ...state,
          endDate: action.endDate
        };
      case SORT_BY_PENDING:
          return {
            ...state,
            pending: !state.pending
        };
      default:
        return state;
    }
  };

  export default filterReducer;