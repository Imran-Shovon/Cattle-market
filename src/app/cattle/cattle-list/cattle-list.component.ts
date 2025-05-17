import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { PricePipe } from '../../pipes/price.pipe';

@Component({
  selector: 'app-cattle-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cattle-list.component.html'
})
export class CattleListComponent {
  cattle: any[] = [];

  constructor(private http: HttpClient) {
    this.fetchCattle();
  }

  fetchCattle() {
    this.http.get<any[]>('http://localhost:3000/cattle')
      .subscribe({
        next: data => this.cattle = data,
        error: () => alert('Failed to fetch cattle!')
      });
  }

  toggle(cow: any) {
    const updated = { ...cow, available: !cow.available };
    this.http.patch(`http://localhost:3000/cattle/${cow.id}`, updated)
      .subscribe(() => cow.available = updated.available);
  }
}
