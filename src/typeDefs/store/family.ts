import { AxiosError } from 'axios';
import {
    GET_FAMILIES,
    GET_FAMILIES_FAILURE,
    GET_FAMILIES_SUCCESS,
    REMOVE_FAMILY,
    ADD_FAMILY,
} from '../../store/family/actionTypes';

import { FamilyType } from '../index';

// actions
export interface getFamiliesAction {
    type: typeof GET_FAMILIES;
}

export interface getFamiliesSuccessAction {
    type: typeof GET_FAMILIES_SUCCESS;
    payload: FamilyType[];
}

export interface getFamiliesFailureAction {
    type: typeof GET_FAMILIES_FAILURE;
    payload: AxiosError;
}

export interface removeFamilyAction {
    type: typeof REMOVE_FAMILY;
    payload: any;
}
export interface addFamilyAction {
    type: typeof ADD_FAMILY;
    payload: any;
}

export type FamilyActionTypes =
    | getFamiliesAction
    | getFamiliesSuccessAction
    | getFamiliesFailureAction
    | addFamilyAction
    | removeFamilyAction;

// reducer
export type FamilyReducerTypes = {
    families: any[];
    error: null | any;
    loading: boolean;
    removed: any[];
};
