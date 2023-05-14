```
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { InventoryTransfer } from '../models/inventory-transfer.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class InventoryTransferService {

  private apiUrl = '/api/inventoryTransfer';

  constructor(private http: HttpClient, private authService: AuthService) { }

  transferInventory(source: string, destination: string, quantity: number): Promise<void> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const body = { source, destination, quantity };
    return this.http.post(this.apiUrl, body, { headers }).pipe(
      map((response: any) => {
        // do something with the response if needed
      })
    ).toPromise();
  }
}
```