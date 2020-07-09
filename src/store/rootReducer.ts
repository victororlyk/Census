import { combineReducers } from 'redux';
import FamilyReducer from './family/reducer';

export const rootReducer = combineReducers({
    FamilyReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
