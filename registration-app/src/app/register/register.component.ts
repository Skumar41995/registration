import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AppConstants } from '../app.constants';
import { ValidatePasswordNotMatch } from '../app.validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {
  registerationForm: FormGroup;
  changePasswordSubmit: boolean;
  formSubmitted: boolean;
  constructor(private formBuilder: FormBuilder,
    private toastr: ToastrService) {
    this.changePasswordSubmit = false;
    this.formSubmitted = false;
  }

  get registerationFormControls() {
    return this.registerationForm.controls;
  }

  get firstName() {
    return this.registerationForm.controls['firstName'];
  }

  get lastNmae() {
    return this.registerationForm.controls['lastNmae'];
  }

  get mobileNo() {
    return this.registerationForm.controls['mobileNo'];
  }

  get emailAddress() {
    return this.registerationForm.controls['emailAddress'];
  }

  get dataOfBirth() {
    return this.registerationForm.controls['dataOfBirth'];
  }

  get homeAddress() {
    return this.registerationForm.controls['homeAddress'];
  }

  get homeCity() {
    return this.registerationForm.controls['homeCity'];
  }

  get homeState() {
    return this.registerationForm.controls['homeState'];
  }

  get newPassword() {
    return this.registerationForm.controls['newPassword'];
  }

  get confirmPassword() {
    return this.registerationForm.controls['confirmPassword'];
  }

  buildForm() {
    this.registerationForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern(AppConstants.REGEX.USERNAME)]],
      lastNmae: ['', [Validators.required, Validators.pattern(AppConstants.REGEX.USERNAME)]],
      mobileNo: ['', [Validators.required, Validators.pattern(AppConstants.REGEX.MOBILE)]],
      homeCity: [''],
      homeState: [''],
      emailAddress: ['', [Validators.required, Validators.pattern(AppConstants.REGEX.EMAIL)]],
      dataOfBirth: [''],
      homeAddress: [''],
      newPassword: ['', [Validators.required, Validators.pattern(AppConstants.REGEX.PASSWORD)]],
      confirmPassword: ['', [Validators.required, ValidatePasswordNotMatch.passwordMismatch('newPassword'), Validators.pattern(AppConstants.REGEX.PASSWORD)]],
    });
  }

  ngOnInit() {
    this.buildForm();
  }

  registerUser() {
    let payload = {
      ['user']: {
        fName: this.registerationForm.value.firstName,
        lName: this.registerationForm.value.lastNmae,
        mobNo: this.registerationForm.value.mobileNo,
        hmCity: this.registerationForm.value.homeCity,
        hmState: this.registerationForm.value.homeState,
        emailAdd: this.registerationForm.value.emailAddress,
        dob: this.registerationForm.value.dataOfBirth,
        hmAddress: this.registerationForm.value.homeAddress,
        newPass: this.registerationForm.value.newPassword,
        confirmPass: this.registerationForm.value.confirmPassword
      }
    };
    this.toastr.success('User Account created successfully, please log in using the registered email and password');
    console.table(payload);
    this.registerationForm.reset();
  }
}
