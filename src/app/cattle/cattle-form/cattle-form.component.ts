import { CommonModule } from '@angular/common';
// import { HttpClient } from '@angular/common/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-cattle-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './cattle-form.component.html'
})
export class CattleFormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      breed: ['', Validators.required],
      weight: [100, Validators.min(100)],
      price: [50000, Validators.min(50000)],
      available: [true]
    });
  }

  submit() {
    if (this.form.valid) {
      this.http.post('http://localhost:3000/cattle', this.form.value)
        .subscribe({
          next: () => alert('Cattle added!'),
          error: () => alert('Failed to add cattle!')
        });
    }
  }
}
