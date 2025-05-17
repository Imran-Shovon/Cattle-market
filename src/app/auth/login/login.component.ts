import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, RouterModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  form!: FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {}
  
  ngOnInit(): void {
    console.log('LoginComponent initialized2');
    
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
 login(): void {
  if (this.form.invalid) {
    this.form.markAllAsTouched();
    return;
  }

  const { username, password } = this.form.value;

  this.http.get<any[]>(`http://localhost:3000/users?username=${username}&password=${password}`)
    .subscribe({
      next: (res) => {
        if (res.length > 0) {
          // User found
          const user = res[0];
          localStorage.setItem('token', user.token);
          this.router.navigate(['/cattle']);
        } else {
          // No match
          alert('Invalid username or password');
        }
      },
      error: (err) => {
        console.error('Login error', err);
        alert('Login failed');
      }
    });
}


  login21() {
  const { username, password } = this.form.value;
  console.log(`http://localhost:3000/users?username=${username}&password=${password}`);
  
  this.http.get<any[]>(`http://localhost:3000/users?username=${username}&password=${password}`)
    .subscribe({
      next: (res) => {
        if (res.length) {
          localStorage.setItem('token', res[0].token);
          this.router.navigate(['/cattle']);
        } else {
          alert('Invalid credentials');
        }
      },
      error: () => alert('Login failed!')
    });
}

  login2() {
    console.log(this.form.value);
    
    const { username, password } = this.form.value;
    this.http.get<any[]>(`http://localhost:3000/auth/login?username=${username}&password=${password}`)
      .subscribe({
        next: (res) => {
          if (res.length) {
            localStorage.setItem('token', res[0].token);
            this.router.navigate(['/cattle']);
          } else {
            alert('Invalid credentials');
          }
        },
        error: () => alert('Login failed!')
      });
  }
}
