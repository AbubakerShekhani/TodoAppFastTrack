import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup  } from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent implements OnInit {

  profileForm1 = null;
  
  constructor(private fb: FormBuilder) { 
    this.profileForm1 = this.fb.group({ 
      firstName: ['', [
        Validators.required,
        Validators.minLength(4)
      ]],
      lastName: ['', [Validators.required,
                     Validators.minLength(4)]],
      address: ['', [Validators.required,
                    Validators.minLength(10)]],
     });

  }

  ngOnInit() {
  }

  get firstName() {
    return this.profileForm1.get('firstName');
  }

  get lastName() {
    return this.profileForm1.get('lastName');
  }

  get address() {
    return this.profileForm1.get('address');
  }

}
