import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private formGroup: FormGroup;

  private flags = {
    isProcessingInProgress: false
  };

  private error;

  constructor(private formBuilder: FormBuilder, private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    this.flags.isProcessingInProgress = true;
    this.auth.login(this.formGroup.value, 
      (res) => {
        this.flags.isProcessingInProgress = false;
      }, 
      (err) => {
        this.flags.isProcessingInProgress = false;
        this.error = err;
        setTimeout(() => {
          if (this.error) {
            this.error = undefined;
          }
        }, 3000);
      }, 
      (userAttributes, requiredAttributes) => {
        this.flags.isProcessingInProgress = false;
        this.router.navigate(['profileCreation']);
      }
    );
  }
}
