import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IWeather } from 'src/app/core/interfaces/apiResponse';
import { AppState } from 'src/app/store';
import { LoadWeather } from 'src/app/store/wather/actions';
import { loaderSelector, weatherSelector } from 'src/app/store/wather/selectors';
const INITIAL_INDEX: number = 0;
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  citiesList: string[] = ['Tel Aviv', 'London'];
  weatherform: FormGroup;
  weathers$: Observable<IWeather[]>;
  loading$: Observable<boolean>;
  currentFormInstanseIdx: number = INITIAL_INDEX;

  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    this.weatherform = this.fb.group(
      {
        weathers: this.fb.array(
          [
            this.fb.group({
              city: [''],
              unit: ['']
            })
          ])
      }
    )
  }
  ngOnInit(): void {
    this.loading$ = this.store.select(loaderSelector);
  }

  onSearchWeather(formIdx: number): boolean {
    const formInstance: AbstractControl = this.getFormByIdx(formIdx);
    if (formInstance.invalid) {
      formInstance.markAllAsTouched();
      return false;
    }
    if (this.currentFormInstanseIdx !== formIdx)
      return false;

    this.getWeather(this.city, this.unit);
    this.addGroup();
    this.currentFormInstanseIdx++;

    return false;
  }

  getWeather(city: string, unit: string): void {
    this.store.dispatch(new LoadWeather({ city, unit }))
    this.weathers$ = this.store.select(weatherSelector);
  }

  addGroup(): void {
    this.weathersFormArray.push(this.fb.group({ city: [''], unit: [''] }));
  }

  getFormByIdx(idx: number): AbstractControl {
    return this.weathersFormArray.at(idx)
  }
  get city(): string {
    return this.weathersFormArray.at(this.currentFormInstanseIdx).get("city").value;
  }
  get unit(): string {
    return this.weathersFormArray.at(this.currentFormInstanseIdx).get("unit").value;
  }
  get weathersFormArray(): FormArray {
    return this.weatherform.get("weathers") as FormArray;
  }

}
