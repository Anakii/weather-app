import {Action} from '@ngrx/store';
import { IApiResponse, IWeather } from 'src/app/core/interfaces/apiResponse';

export const LOAD_WEATHER: string = "[REQUEST_WEATHER]";
export const LOAD_WEATHER_SUCCESS: string = "[REQUEST_LOAD_WEATHER_SUCCESS]";
export interface CustomAction extends Action {
  type: string;
  payload?: any;
  }
  export interface LoadWeatherPayload{
    city:string;
    unit:string;
  }
export class LoadWeather implements CustomAction {
  readonly type:string = LOAD_WEATHER;
  constructor(public payload: LoadWeatherPayload) {}

}
export class LoadWeatherSuccess implements CustomAction {
  readonly type:string = LOAD_WEATHER_SUCCESS;
  constructor(public payload: IApiResponse<IWeather>) {}
}



