import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['user']
    });
  }

  onSubmit(): void {
    if (this.signupForm.invalid) {
      return;
    }

    this.loading = true;
    const { name, email, password, role } = this.signupForm.value;

    this.authService.signup(name, email, password, role).subscribe(
      () => {
        this.snackBar.open('Registration successful! Please login.', 'Close', {
          duration: 3000
        });
        this.router.navigate(['/login']);
      },
      err => {
        this.snackBar.open(err.error.message || 'Registration failed', 'Close', {
          duration: 3000
        });
        this.loading = false;
      },
      () => {
        this.loading = false;
      }
    );
  }
}