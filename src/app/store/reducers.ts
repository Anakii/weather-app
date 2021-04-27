import {ActionReducerMap} from '@ngrx/store';
import {AppState} from '.';
import { weatherReducer} from './wather/reducer';

export const reducers: ActionReducerMap<AppState> = {
  weather: weatherReducer
}

