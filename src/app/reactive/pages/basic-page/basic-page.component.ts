import { JsonPipe } from '@angular/common';
import { Component, inject} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-basic-page',
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './basic-page.component.html',
})
export class BasicPageComponent {

  private fb = inject(FormBuilder);

  myForm = this.fb.group({
    name: ["", /** sync validators */, /** async validators */],
    price: [0],
    inStorage: [0],
  })


  // myForm = new FormGroup({
  //   name: new FormControl(),
  //   price: new FormControl(),
  //   inStorage: new FormControl(0),
  // })

 }
