
import { InventoryDiscrepancy, InventoryReport } from '../models';

export class ReportService {

    private apiBase = 'http://127.0.0.1:3001';

    async getInventoryDiscrepancies(): Promise<InventoryDiscrepancy[]> {
        try {
            const response = await fetch(`${this.apiBase}/api/reports/inventory-discrepancies-GET.json`, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                },

            });
            const data: InventoryDiscrepancy[] = await response.json();
            return data;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }


    async getInventoryReport(): Promise<InventoryReport> {
        try {
            const response = await fetch(`${this.apiBase}/api/reports/inventory-GET.json`, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                },

            });
            const data: InventoryReport = await response.json();
            return data;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }


    async createInventoryReport(inventoryDiscrepancies: InventoryDiscrepancy[]): Promise<InventoryReport> {
        try {
            const response = await fetch(`${this.apiBase}/api/reports/create-inventory-POST.json`, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                },
                // body: JSON.stringify({ inventoryDiscrepancies }),
            });
            const data: InventoryReport = await response.json();
            return data;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

}
// export default ReportService;
