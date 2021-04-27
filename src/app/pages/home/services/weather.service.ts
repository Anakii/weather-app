import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApiResponse, IWeather } from 'src/app/core/interfaces/apiResponse';
import { RestfulService } from 'src/app/core/services/restfull.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private baseUrl: string
  constructor(private restfull: RestfulService) {
    this.baseUrl = environment.weatherBaseUrl
  }

  getWeatherByCityName(city: any, unit: any): Observable<IApiResponse<IWeather>> {
    return this.restfull.get<IApiResponse<IWeather>>(`${this.baseUrl}/data/2.5/weather?q=${city}&units=${unit}&appid=${environment.apiKey}`)
  }
}
