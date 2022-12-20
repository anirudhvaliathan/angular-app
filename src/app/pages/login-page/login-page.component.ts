import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  /* loginForm = new FormGroup({
    email: new FormControlName('an'),
    password: new FormControlName('abc')    
  }) */

  constructor(private fb: FormBuilder) { }

  loginForm = this.fb.group({
    email: [null, [Validators.email, Validators.required]],
    password: [null, [Validators.required, Validators.minLength(6)]]
  })

  get email() {
    return this.loginForm.get('email')
  }

  get password() {
    return this.loginForm.get('password')
  }

  ngOnInit(): void {
  }

}
