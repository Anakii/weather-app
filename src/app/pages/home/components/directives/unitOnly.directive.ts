import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { CustomValidators } from 'src/app/shared/validators/validators';

@Directive({
  selector: '[unitOnly]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: UnitOnlyDirective,
      multi: true
    }
  ]

})
export class UnitOnlyDirective implements Validator {

  constructor(private hostElement: ElementRef<HTMLUnknownElement>, private renderer: Renderer2) { }

  validate(control: AbstractControl): ValidationErrors {
    // console.log(CustomValidators.unitOnly(control));
    const validationError: ValidationErrors = CustomValidators.unitOnly(control);
    if (validationError) {
      console.log(this.hostElement);
      
      this.addClasses(['control-error'])
      return validationError
    }
    this.removeClasses(['control-error'])
    return null;
  }

  private removeClasses(classToRemove: string[]): void {
    classToRemove.forEach(cssClass => {
      this.renderer.removeClass(this.hostElement.nativeElement, cssClass)
    })
  }
  private addClasses(classToRemove: string[]): void {
    classToRemove.forEach(cssClass => {
      this.renderer.addClass(this.hostElement.nativeElement, cssClass)
    })
  }


}
