```
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { InventoryHistoryItem } from '../models/inventory-history-item';

@Injectable({
  providedIn: 'root'
})
export class InventoryHistoryService {

  private baseUrl = '/api/inventoryHistory';

  constructor(private http: HttpClient, private authService: AuthService) { }

  private getHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  getInventoryHistory(): Observable<InventoryHistoryItem[]> {
    const headers = this.getHeaders();
    return this.http.get<{ inventoryHistory: any[] }>(`${this.baseUrl}`, { headers }).pipe(
      map(res => res.inventoryHistory.map(item => new InventoryHistoryItem(
        item.id,
        item.action,
        item.type,
        item.quantity,
        item.location,
        new Date(item.date)
      )))
    );
  }

  searchInventoryHistory(searchTerm: string): Observable<InventoryHistoryItem[]> {
    const headers = this.getHeaders();
    return this.http.get<{ inventoryHistory: any[] }>(`${this.baseUrl}/search/${searchTerm}`, { headers }).pipe(
      map(res => res.inventoryHistory.map(item => new InventoryHistoryItem(
        item.id,
        item.action,
        item.type,
        item.quantity,
        item.location,
        new Date(item.date)
      )))
    );
  }
}
```