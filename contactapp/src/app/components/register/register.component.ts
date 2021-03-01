import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  public registerForm = this.fb.group({
    firstname: ['', [Validators.required, Validators.pattern("^[a-zA-Z]+$")]],
    lastname: ['', [Validators.required]],
    email: ['', [Validators.required]],
    password: ['', [Validators.required]]
    // firstname: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z]+$")]),
    // lastname: new FormControl('', [Validators.required]),
    // email: new FormControl('', [Validators.required]),
    // password: new FormControl('', [Validators.required])
  });
  // firstname = new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z]+$")]);
  // lastname = new FormControl('', [Validators.required]);
  // email = new FormControl('', [Validators.required]);
  // password = new FormControl('', [Validators.required]);

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
    } else {
      alert('Forms is invalid');
    }
    // console.log(this.firstname.value, this.lastname.value, this.email.value, this.password.value);
  }

  get firstname() { return this.registerForm.get('firstname') }
  get lastname() { return this.registerForm.get('lastname') }
  get email() { return this.registerForm.get('email') }
  get password() { return this.registerForm.get('password') }

}
