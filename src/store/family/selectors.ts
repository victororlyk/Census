import filter from 'lodash/fp/filter';
import includes from 'lodash/fp/includes';
import findIndex from 'lodash/fp/findIndex';

import { RootState } from '../rootReducer';

const primary = 'primary';
const spouse = 'spouse';
const children = 'children';

export const getLoading = (state: RootState) => state.FamilyReducer.loading;
export const getFamilies = (state: RootState) => state.FamilyReducer.families;
export const getPrimary = (state: RootState) =>
    filter((family) => Object.keys(family).every((el) => [primary].includes(el)), state.FamilyReducer.families).length;

export const getPrimarySpouce = (state: RootState) => {
    return filter((family) => {
        const pmIncluded = includes(primary, Object.keys(family));
        const spouseIncluded = includes(spouse, Object.keys(family));
        const childrenIncluded = includes(children, Object.keys(family));
        return !!(pmIncluded && spouseIncluded && !childrenIncluded);
    }, state.FamilyReducer.families).length;
};

export const getAll = (state: RootState) => {
    return filter((family) => {
        const pmIncluded = includes(primary, Object.keys(family));
        const spouseIncluded = includes(spouse, Object.keys(family));
        const childrenIncluded = includes(children, Object.keys(family));
        return !!(pmIncluded && spouseIncluded && childrenIncluded);
    }, state.FamilyReducer.families).length;
};

export const getRemoved = (state: RootState) => state.FamilyReducer.removed;

export const getRemovedPrimary = (state: RootState) => {
    const removed = getRemoved(state);
    return filter((family: any) => {
        const index = findIndex(family, state.FamilyReducer.families);
        const pmIncluded = includes(primary, Object.keys(family));
        const spouseIncluded = includes(spouse, Object.keys(family));
        const childrenIncluded = includes(children, Object.keys(family));
        return !!(pmIncluded && !spouseIncluded && !childrenIncluded && removed.includes(index));
    }, state.FamilyReducer.families).length;
};

export const getRemovedPrimarySpouse = (state: RootState) => {
    const removed = getRemoved(state);
    return filter((family: any) => {
        const index = findIndex(family, state.FamilyReducer.families);
        const pmIncluded = includes(primary, Object.keys(family));
        const spouseIncluded = includes(spouse, Object.keys(family));
        const childrenIncluded = includes(children, Object.keys(family));
        return !!(pmIncluded && spouseIncluded && !childrenIncluded && removed.includes(index));
    }, state.FamilyReducer.families).length;
};

export const getRemovedAll = (state: RootState) => {
    const removed = getRemoved(state);
    return filter((family: any) => {
        const index = findIndex(family, state.FamilyReducer.families);
        const pmIncluded = includes(primary, Object.keys(family));
        const spouseIncluded = includes(spouse, Object.keys(family));
        const childrenIncluded = includes(children, Object.keys(family));
        return !!(pmIncluded && spouseIncluded && childrenIncluded && removed.includes(index));
    }, state.FamilyReducer.families).length;
};
