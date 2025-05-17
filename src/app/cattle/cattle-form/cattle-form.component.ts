import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CattleService } from '../service/cattle.service';

@Component({
  selector: 'app-add-cattle',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cattle-form.component.html',
})

export class CattleFormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private cattleService: CattleService, private router: Router) {
    this.form = this.fb.group({
      breed: ['', Validators.required],
      weight: [0, [Validators.required, Validators.min(1)]],
      price: [0, [Validators.required, Validators.min(1)]],
      available: [true]
    });
  }



  submit() {
    if (this.form.valid) {
      this.cattleService.addCattle(this.form.value).subscribe({
        next: () => {
          alert('Cattle added successfully!');
          this.router.navigate(['/cattle']); // redirect to home page
        },
        error: (err) => {
          console.error('Failed to add cattle', err);
          alert('Error adding cattle');
        }
      });
    }
  }
}
