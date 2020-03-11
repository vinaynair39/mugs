import { GET_GRIEVANCES, GET_SELECTED, SELECT_GRIEVANCE, DESELECT_GRIEVANCE, ALLOCATE_DATE,GET_COMMITTEES} from '../actions/constants'

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
            console.log(action.id)
            const data = state.grievances.filter(x => x._id === action.id)[0]
            return {
                ...state,
                selected: [...state.selected, data]
            }
        case DESELECT_GRIEVANCE:
            const deselect = state.selected.filter((grievance) => grievance._id !== action.id);
            return {
                ...state,
                selected: deselect,
            }
        case GET_COMMITTEES:
            return {
                ...state,
                committees: action.committees
            }

        default:
            return state;
    }
};