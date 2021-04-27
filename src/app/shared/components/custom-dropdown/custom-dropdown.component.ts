import { Component, HostListener, Input, OnInit, TemplateRef } from '@angular/core';
import { NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.scss'],
})
export class CustomDropdownComponent implements OnInit {
  @Input() options: any[] = [];
  @Input() placeholderLabel: string;
  @Input() customOption: TemplateRef<any>;
  constructor(public control:NgControl) { 
    this.control.valueAccessor = this
  }

  ngOnInit() {
  }


  toggled: boolean = false;
  selected: any;
  onChange: (item: any) => void
  onTouched: () => void
  @HostListener("document:click", ['$event'])
  toggleSelect(event: MouseEvent): void {
    if (this.toggled === true)
      this.onToggle(event);
  }
  writeValue(obj: any): void {
    this.selected = obj
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
    // throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
    // throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    // throw new Error('Method not implemented.');
  }

  onToggle(event: MouseEvent): void {
    event.stopPropagation();
    this.toggled = !this.toggled;
  }
  onSelect(item: any): void {
    this.selected = item;
    this.onChange(item); // outher component will notify the form control in the parent that the value changed
    this.onTouched();
  }


}
