import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'] // Correction : utilisation de styleUrls au pluriel
})
export class SignupFormComponent {

  // Correction : injection de FormBuilder via le constructeur
  constructor(private formBuilder: FormBuilder) {}

  signUpForm = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(3)]], // Correction : Validators.required
    email: ['', [Validators.required, Validators.email]], // Correction : Validators.required
    passwords: this.formBuilder.group({
      password: ['', [Validators.required, this.securePasswordValidator()]], // Correction : Validators.required
      confirmPassword: ['']
    }, { validators: this.passwordMatchValidator() })
  });

  securePasswordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value || '';

      const hasUpperCase = /[A-Z]/.test(value);
      const hasLowerCase = /[a-z]/.test(value);
      const hasNumber = /\d/.test(value);
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
      const isValidLength = value.length >= 12;

      const passwordValid = hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar && isValidLength;

      return passwordValid ? null : { securePassword: true };
    };
  }

  passwordMatchValidator(): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const password = formGroup.get('password')?.value;
      const confirmPassword = formGroup.get('confirmPassword')?.value;
      return password === confirmPassword ? null : { passwordsMismatch: true };
    };
  }

  onSubmit(): void {
    if (this.signUpForm.valid) {
      console.log('Formulaire envoyé avec succès', this.signUpForm.value);
    } else {
      console.log('Formulaire invalide');
    }
  }
}
