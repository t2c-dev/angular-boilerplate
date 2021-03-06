import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { equalTo } from '@validator';
import { AuthFacade } from '../../auth.facade.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
})
export class ChangePasswordComponent {
  changePasswordForm: FormGroup;
  isFormValid!: boolean;

  constructor(private authFacade: AuthFacade, private fb: FormBuilder) {
    this.changePasswordForm = fb.group({
      oldPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
    });
    this.changePasswordForm.addControl(
      'confirmPassword',
      this.fb.control('', [
        Validators.required,
        equalTo(this.changePasswordForm.controls['newPassword']),
      ]),
    );
    this.authFacade.isChangePasswordValid$.subscribe(
      isValid => (this.isFormValid = isValid),
    );
  }

  goToLogin(): void {
    this.authFacade.goToLogin();
  }

  changePassword(): void {
    this.authFacade.changePassword();
  }
}
