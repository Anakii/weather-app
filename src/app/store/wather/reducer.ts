import { INITIAL_WEATHER_STORE, IWeatherState } from '.';
import { CustomAction, LOAD_WEATHER, LOAD_WEATHER_SUCCESS } from "./actions"

export function weatherReducer(state: IWeatherState = INITIAL_WEATHER_STORE, action: CustomAction): IWeatherState {
  switch (action.type) {
    case LOAD_WEATHER: {
      return { ...state, loading: true }
    }
    case LOAD_WEATHER_SUCCESS: {
      return {
        ...state,
        loading: false,
        weathers: [...state.weathers, action.payload]
      }
    }

    default: return { ...state };
  }
}
