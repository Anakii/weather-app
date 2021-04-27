import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './pages/home/components/home.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './store/reducers';
import { UnitOnlyDirective } from './pages/home/components/directives/unitOnly.directive';
import { WeatherItemComponent } from './pages/home/components/weather-item/weather-item.component';
import { EffectsModule } from '@ngrx/effects';
import { WeatherEffects } from './store/wather/effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WeatherItemComponent,
    UnitOnlyDirective
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([WeatherEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
