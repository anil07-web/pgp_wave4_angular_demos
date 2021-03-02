import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private service: ContactService, private router: Router) { }
  public loginForm = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  ngOnInit(): void {
  }

  onLogin() {
    this.service.login(this.loginForm.value).subscribe((data: any) => {
      localStorage.setItem('token', data.token);
      this.router.navigateByUrl('/');
    });
  }
  get username() { return this.loginForm.get('username') }
  get password() { return this.loginForm.get('password') }
}
