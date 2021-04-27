import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IWeather } from 'src/app/core/interfaces/apiResponse';
import { AppState } from 'src/app/store';
import { IWeatherState } from 'src/app/store/wather';
import { LoadWeather } from 'src/app/store/wather/actions';
import { loaderSelector, weatherSelector } from 'src/app/store/wather/selectors';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  citiesList: string[] = ['Tel Aviv', 'London'];
  weatherform: FormGroup;
  weathers$:Observable<IWeather[]>
  loading$:Observable<boolean>

  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    this.weatherform = this.fb.group({ city: ['London'], unit: ['metric'] })
  }
  ngOnInit(): void {
    this.loading$ = this.store.select(loaderSelector)
  }

  onSearchWeather(): void {
    if(this.weatherform.invalid){
      this.weatherform.markAllAsTouched();
      return;
    }
    this.getWeather()
    console.log(this.weatherform);
  }
  getWeather() {
    this.store.dispatch(new LoadWeather({city:this.weatherform.get("city").value,unit:this.weatherform.get('unit').value}))
    this.weathers$ = this.store.select(weatherSelector)//.subscribe(console.log)
  }

}
