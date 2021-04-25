import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IApiResponse } from 'src/app/core/interfaces/apiResponse';
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

  getWeatherByCityName(): Observable<IApiResponse<any>> {
    return of('')
  }

}
