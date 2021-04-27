import {AppState} from '..'

export const weatherSelector = (state: AppState) => {
  return state.weather.weathers
}
export const loaderSelector = (state: AppState) => {
  return state.weather.loading
}

