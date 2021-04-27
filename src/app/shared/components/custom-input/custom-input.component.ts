import { Component, Input, OnInit, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  // providers: [{
  //   provide: NG_VALUE_ACCESSOR,
  //   useExisting: CustomInputComponent,
  //   multi: true
  // }]
})
export class CustomInputComponent implements OnInit, ControlValueAccessor {
  @Input() placeholderLabel: string = '';
  @Input() type: string = 'text';
  value: string = '';

  constructor(@Self() @Optional() public control: NgControl) {
    console.log(this.control);
    this.control.valueAccessor = this

  }
  onChange: (value: string) => {}
  onTouch: (value: string) => {}

  setValue(value: string) {
    this.value = value;
    this.onChange(value)
    // console.log(this.control);

  }
  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn
  }
  setDisabledState?(isDisabled: boolean): void {
    // throw new Error('Method not implemented.');
  }

  ngOnInit() {
  }


}
