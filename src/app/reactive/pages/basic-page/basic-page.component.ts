import { JsonPipe } from '@angular/common';
import { Component, inject} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './basic-page.component.html',
})
export class BasicPageComponent {

  private fb = inject(FormBuilder);

  myForm = this.fb.group({
    name: ["", [Validators.required, Validators.minLength(3)], /** async validators */],
    price: [0, [Validators.required, Validators.min(10)]],
    inStorage: [0,[Validators.required, Validators.min(0)]],
  })


  // myForm = new FormGroup({
  //   name: new FormControl(),
  //   price: new FormControl(),
  //   inStorage: new FormControl(0),
  // })

 }
