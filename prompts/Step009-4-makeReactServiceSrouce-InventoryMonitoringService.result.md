```
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { AlertSettings, InventoryItem } from '../models';

@Injectable({
  providedIn: 'root'
})
export class InventoryMonitoringService {

  private baseUrl = '/api';

  constructor(private http: HttpClient, private authService: AuthService) { }

  private getHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  getAlertSettings(): Promise<AlertSettings> {
    const url = `${this.baseUrl}/inventoryMonitoring/alertSettings`;
    return this.http.get(url, { headers: this.getHeaders() })
      .pipe(map((res: any) => new AlertSettings(res.threshold)))
      .toPromise();
  }

  updateAlertSettings(settings: AlertSettings): Promise<void> {
    const url = `${this.baseUrl}/inventoryMonitoring/alertSettings`;
    return this.http.put(url, { alertSettings: settings }, { headers: this.getHeaders() })
      .toPromise();
  }

  getInventoryStatus(): Promise<InventoryItem[]> {
    const url = `${this.baseUrl}/inventoryMonitoring/status`;
    return this.http.get(url, { headers: this.getHeaders() })
      .pipe(map((res: any) => res.inventoryStatus.map((item: any) => new InventoryItem(item.id, item.type, item.quantity, item.location, new Date(item.lastUpdated)))))
      .toPromise();
  }
}
```