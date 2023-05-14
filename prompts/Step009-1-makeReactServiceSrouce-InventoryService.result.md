```
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { InventoryItem } from '../models/inventory-item.model';
import { InventoryHistoryItem } from '../models/inventory-history-item.model';
import { AlertSettings } from '../models/alert-settings.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  private baseUrl = '/api';

  constructor(private http: HttpClient, private authService: AuthService) { }

  private getHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  getInventoryList(): Observable<InventoryItem[]> {
    return this.http.get(`${this.baseUrl}/inventory`, { headers: this.getHeaders() })
      .pipe(
        map((response: any) => {
          return response.inventoryList.map((item: any) => {
            return new InventoryItem(
              item.id,
              item.type,
              item.quantity,
              item.location,
              new Date(item.lastUpdated)
            );
          });
        })
      );
  }

  getInventoryItem(id: string): Observable<InventoryItem> {
    return this.http.get(`${this.baseUrl}/inventory/${id}`, { headers: this.getHeaders() })
      .pipe(
        map((response: any) => {
          return new InventoryItem(
            response.inventoryItem.id,
            response.inventoryItem.type,
            response.inventoryItem.quantity,
            response.inventoryItem.location,
            new Date(response.inventoryItem.lastUpdated)
          );
        })
      );
  }

  updateInventoryItem(item: InventoryItem): Observable<void> {
    return this.http.put(`${this.baseUrl}/inventory/${item.id}`, { inventoryItem: item }, { headers: this.getHeaders() })
      .pipe(
        map(() => {})
      );
  }

  deleteInventoryItem(id: string): Observable<void> {
    return this.http.delete(`${this.baseUrl}/inventory/${id}`, { headers: this.getHeaders() })
      .pipe(
        map(() => {})
      );
  }

  searchInventory(searchTerm: string): Observable<InventoryItem[]> {
    return this.http.get(`${this.baseUrl}/inventory/search/${searchTerm}`, { headers: this.getHeaders() })
      .pipe(
        map((response: any) => {
          return response.inventoryList.map((item: any) => {
            return new InventoryItem(
              item.id,
              item.type,
              item.quantity,
              item.location,
              new Date(item.lastUpdated)
            );
          });
        })
      );
  }

  getInventoryHistory(): Observable<InventoryHistoryItem[]> {
    return this.http.get(`${this.baseUrl}/inventoryHistory`, { headers: this.getHeaders() })
      .pipe(
        map((response: any) => {
          return response.inventoryHistory.map((item: any) => {
            return new InventoryHistoryItem(
              item.id,
              item.type,
              item.quantity,
              item.location,
              new Date(item.date),
              item.action
            );
          });
        })
      );
  }

  searchInventoryHistory(searchTerm: string): Observable<InventoryHistoryItem[]> {
    return this.http.get(`${this.baseUrl}/inventoryHistory/search/${searchTerm}`, { headers: this.getHeaders() })
      .pipe(
        map((response: any) => {
          return response.inventoryHistory.map((item: any) => {
            return new InventoryHistoryItem(
              item.id,
              item.type,
              item.quantity,
              item.location,
              new Date(item.date),
              item.action
            );
          });
        })
      );
  }

  getAlertSettings(): Observable<AlertSettings> {
    return this.http.get(`${this.baseUrl}/inventoryMonitoring/alertSettings`, { headers: this.getHeaders() })
      .pipe(
        map((response: any) => {
          return new AlertSettings(
            response.alertSettings.email,
            response.alertSettings.threshold
          );
        })
      );
  }

  updateAlertSettings(alertSettings: AlertSettings): Observable<void> {
    return this.http.put(`${this.baseUrl}/inventoryMonitoring/alertSettings`, { alertSettings }, { headers: this.getHeaders() })
      .pipe(
        map(() => {})
      );
  }

  getInventoryStatus(): Observable<InventoryItem[]> {
    return this.http.get(`${this.baseUrl}/inventoryMonitoring/status`, { headers: this.getHeaders() })
      .pipe(
        map((response: any) => {
          return response.inventoryStatus.map((item: any) => {
            return new InventoryItem(
              item.id,
              item.type,
              item.quantity,
              item.location,
              new Date(item.lastUpdated)
            );
          });
        })
      );
  }
}
```