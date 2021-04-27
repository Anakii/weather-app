import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDropdownComponent } from './components/custom-dropdown/custom-dropdown.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedLoaderComponent } from './components/shared-loader/shared-loader.component';

@NgModule({
  declarations: [CustomDropdownComponent,CustomInputComponent,SharedLoaderComponent],
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  exports:[CustomDropdownComponent,CustomInputComponent,ReactiveFormsModule,SharedLoaderComponent]
})
export class SharedModule { }
