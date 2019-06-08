import { combineReducers } from 'redux';
import { actionTypes } from './actions';
import {ImageData} from '../types';

interface ReducerData {
  type: string;
  payload: any
}

export function images(state: ImageData = {}, { type, payload }: any) {
  if (type !== actionTypes.LOAD_IMAGES + '_SUCCESS') {
    return state;
  }
  return (payload.data) as ImageData;
}

export const rootReducer = combineReducers({
  images
});
