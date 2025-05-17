import { CommonModule } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PricePipe } from '../../pipes/price.pipe';
import { Cattle } from '../model/cattle.model';
import { CattleService } from '../service/cattle.service';

@Component({
  selector: 'app-cattle-list',
  standalone: true,
  imports: [CommonModule, PricePipe],
  templateUrl: './cattle-list.component.html'
})
export class CattleListComponent {
  cattleList: any[] = [];

  constructor(private http: HttpClient, private cattleService: CattleService,private router: Router) {
    this.fetchCattle();
  }

      CattleAdd() {
      this.router.navigate(['/add-cattle']);
  }

  fetchCattle() {
    this.cattleService.getCattle()
      .subscribe({
        next: data => this.cattleList = data,
        error: () => alert('Failed to fetch cattle!')
      });
  }

  toggleAvailability(cow: Cattle) {
    const updatedStatus = !cow.available;

    this.cattleService.updateCattleAvailability(cow.id, updatedStatus).subscribe({
      next: () => {
        cow.available = updatedStatus;
      },
      error: (err: HttpErrorResponse) => {
        console.error('Failed to update cattle status', err);
        alert('Something went wrong. Try again.');
      }
    });
  }

  
}
