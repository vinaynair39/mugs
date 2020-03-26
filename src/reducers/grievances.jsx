import { GET_GRIEVANCES, GET_SELECTED, SELECT_GRIEVANCE,ALLOCATE_DATE, DESELECT_GRIEVANCE, REJECT_GRIEVANCE, GET_COMMITTEES } from '../actions/constants'

const initialState = {
    grievances: [],
    selected: [],
    committees: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_GRIEVANCES:
            return {
                ...state,
                grievances: action.grievances,
            };
        case GET_SELECTED:
            return {
                ...state,
                selected: action.selected
            };
        case SELECT_GRIEVANCE:
            const data = state.grievances.filter(x => x._id === action.id)[0]
            const grievances = state.grievances.filter(x => x._id !== action.id)
            return {
                ...state,
                grievances,
                selected: [...state.selected, data]
            }
        case DESELECT_GRIEVANCE:
            const deselect = state.selected.filter((grievance) => grievance._id !== action.id);
            return {
                ...state,
                selected: deselect,
            }
        case REJECT_GRIEVANCE:
            const reject = state.selected.filter((grievance) => grievance._id !== action.id);
            return {
                ...state,
                grievance: reject,
            }
        case GET_COMMITTEES:
            return {
                ...state,
                committees: action.committees
            }
        case ALLOCATE_DATE:
            const allocate = state.selected.filter((grievance) => grievance._id !== action.id);
            return{
                ...state,
                selected: allocate
            }

        default:
            return state;
    }
};