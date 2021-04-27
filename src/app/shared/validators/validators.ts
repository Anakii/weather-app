import { AbstractControl, ValidationErrors } from "@angular/forms";
import { UnitType } from "../enums/unit-type.enum";

export class CustomValidators {

    public static unitOnly(control: AbstractControl): ValidationErrors {
        console.log(control);
        
        const unitEnumName: string = ((control.value) as string).toUpperCase();
        return UnitType[unitEnumName] ? null : { unitOnly: true };
    }
}