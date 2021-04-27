import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import {LoadWeather, LoadWeatherSuccess} from './actions';
import {LOAD_WEATHER} from "./actions"
import { WeatherService } from 'src/app/pages/home/services/weather.service';

@Injectable()
export class WeatherEffects {

  @Effect()
  loadLocation$ = this.actions$
    .pipe(
      ofType(LOAD_WEATHER), // on dispatch LOAD_PIZZAS action happend
      mergeMap((data:LoadWeather) => this.weatherService.getWeatherByCityName(data.payload.city,data.payload.unit)
      .pipe(
        map(weather => {
          return (new LoadWeatherSuccess(weather)); // dispatch new action with server data
        }),
        catchError((errorMessage) => of(({error: errorMessage})))
      ))
  );

  constructor(private actions$: Actions, private weatherService: WeatherService) { }

}
