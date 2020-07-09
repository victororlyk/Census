import { AxiosError } from 'axios';
import { FamilyType } from '../../typeDefs';
import {
    addFamilyAction,
    getFamiliesAction,
    getFamiliesFailureAction,
    getFamiliesSuccessAction,
    removeFamilyAction,
} from '../../typeDefs/store/family';
import { ADD_FAMILY, GET_FAMILIES, GET_FAMILIES_FAILURE, GET_FAMILIES_SUCCESS, REMOVE_FAMILY } from './actionTypes';

export const getFamilies = (): getFamiliesAction => ({
    type: GET_FAMILIES,
});

export const getFamiliesSuccess = (blogs: FamilyType[]): getFamiliesSuccessAction => ({
    type: GET_FAMILIES_SUCCESS,
    payload: blogs,
});

export const getFamiliesFailure = (error: AxiosError): getFamiliesFailureAction => ({
    type: GET_FAMILIES_FAILURE,
    payload: error,
});

export const addFamily = (family: any): addFamilyAction => ({
    type: ADD_FAMILY,
    payload: family,
});

export const removeFamily = (family: any): removeFamilyAction => ({
    type: REMOVE_FAMILY,
    payload: family,
});
