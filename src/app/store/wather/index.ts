import { IWeather } from "src/app/core/interfaces/apiResponse";


export interface IWeatherState {
  weathers: IWeather[];
  loading: boolean
}
export const INITIAL_WEATHER_STORE: IWeatherState = {
  weathers: [],
  loading: false
}
