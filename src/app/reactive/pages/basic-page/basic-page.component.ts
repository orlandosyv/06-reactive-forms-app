import { JsonPipe } from '@angular/common';
import { Component, inject} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './basic-page.component.html',
})
export class BasicPageComponent {

  private fb = inject(FormBuilder);

  myForm : FormGroup = this.fb.group({
    name: ["", [Validators.required, Validators.minLength(3)], /** async validators */],
    price: [0, [Validators.required, Validators.min(10)]],
    inStorage: [0,[Validators.required, Validators.min(0)]],
  })

  isValidField(fieldName: string) : boolean | null {
    return !! this.myForm.controls[fieldName].errors
  }

  getFieldError(fieldName: string): string | null {
    if (!this.myForm.controls[fieldName]) return null;

    const errors = this.myForm.controls[fieldName].errors ?? {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido';

        case 'minlength':
          return `Mínimo de ${errors['minlength'].requiredLength} caracteres.`;

        case 'min':
          return `Valor mínimo de ${errors['min'].min}`;
      }
    }

    return null;
  }


  // myForm = new FormGroup({
  //   name: new FormControl(),
  //   price: new FormControl(),
  //   inStorage: new FormControl(0),
  // })

 }
