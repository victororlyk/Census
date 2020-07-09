import { GET_FAMILIES, GET_FAMILIES_SUCCESS, GET_FAMILIES_FAILURE, ADD_FAMILY, REMOVE_FAMILY } from './actionTypes';
import { FamilyReducerTypes, FamilyActionTypes } from '../../typeDefs/store/family';

const initialState: FamilyReducerTypes = {
    families: [],
    error: null,
    loading: true,
    removed: [],
};

export default (state = initialState, action: FamilyActionTypes): FamilyReducerTypes => {
    switch (action.type) {
        case GET_FAMILIES:
            return {
                ...state,
                loading: true,
            };
        case GET_FAMILIES_SUCCESS:
            return {
                ...state,
                families: [...action.payload],
                loading: false,
            };
        case GET_FAMILIES_FAILURE:
            return {
                ...state,
                loading: false,
            };
        case REMOVE_FAMILY:
            const index = state.removed.indexOf(action.payload);
            const newRemoved = [...state.removed];
            newRemoved.splice(index, 1);
            return {
                ...state,
                removed: newRemoved,
            };
        case ADD_FAMILY:
            return {
                ...state,
                removed: [...state.removed, action.payload],
            };
        default:
            return state;
    }
};
