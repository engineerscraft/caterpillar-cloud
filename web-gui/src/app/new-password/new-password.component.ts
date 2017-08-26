import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss']
})
export class NewPasswordComponent implements OnInit {

  @Input() userAttributes: any;

  private flags = {
    isProcessingInProgress: false
  };

  private formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      address: ['', Validators.required],
      email: ['', Validators.required],
      name: ['', Validators.required],
      phone_number: ['', Validators.required],
      newPassword: ['', Validators.required],
      confirmedNewPassword: ['', Validators.required]
    });

    this.formGroup.setValue({
      address: this.userAttributes.address, 
      email: this.userAttributes.email,
      name: this.userAttributes.name,
      phone_number: this.userAttributes.phone_number,
      newPassword: '',
      confirmedNewPassword: ''
    });
  }

}
