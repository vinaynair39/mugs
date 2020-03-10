import { GET_GRIEVANCES, GET_SELECTED, SELECT_GRIEVANCE, DESELECT_GRIEVANCE, ALLOCATE_DATE} from '../actions/constants'

const initialState = {
    grievances: [],
    selected: []
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
            let index = state.grievances.findIndex(x => x._id === action.id);
            data.status = 0;
            delete state.grievances[index]
            return {
                ...state,
                selected: [...state.selected, data]
            }
        case DESELECT_GRIEVANCE:
            const deselect = state.selected.filter((grievance) => grievance._id !== action.id);
            let back = state.selected.filter(x => x._id === action.id)[0];
            back.status = -1;
            return {
                ...state,
                selected: deselect,
                grievances: [...state.grievances, back]

            }

        default:
            return state;
    }
};