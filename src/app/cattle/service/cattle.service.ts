import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cattle } from '../model/cattle.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CattleService {
  private apiUrl = 'http://localhost:3000/cattle';

  constructor(private http: HttpClient) {}

  getCattle(): Observable<Cattle[]> {
    return this.http.get<Cattle[]>(this.apiUrl);
  }
}