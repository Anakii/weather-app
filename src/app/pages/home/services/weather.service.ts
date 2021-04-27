import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IApiResponse, IWeather } from 'src/app/core/interfaces/apiResponse';
import { RestfulService } from 'src/app/core/services/restfull.service';
import { LoadWeather } from 'src/app/store/wather/actions';
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
    console.log(city);
    console.log(unit);
    
    return this.restfull.get<IApiResponse<IWeather>>(`${this.baseUrl}/data/2.5/weather?q=london&appid=0d7303c17ee3d3482cd82a2ad273a90d`)
  }

}
