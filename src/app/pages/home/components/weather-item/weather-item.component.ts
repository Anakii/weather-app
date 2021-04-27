import { Component, Input, OnInit } from '@angular/core';
import { IWeather, IWeatherData } from 'src/app/core/interfaces/apiResponse';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.scss']
})
export class WeatherItemComponent implements OnInit {
  @Input() weatherInfo: IWeather;
  iconLink: string = ''
  constructor() { }

  ngOnInit() {
    this.iconLink = `${environment.wheatherIconsBaseUrl}/${this.weatherInfo.weather[0].icon}.png`
  }

}
