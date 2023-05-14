
import { InventoryDiscrepancy, InventoryReport } from '../models';

export class ReportService {

    private apiBase = '';

    async getInventoryDiscrepancies(): Promise<InventoryDiscrepancy[]> {
        try {
            const response = await fetch(`${this.apiBase}/getInventoryDiscrepancies/api/GET-ReportService-getInventoryDiscrepancies.json`, {
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
            const response = await fetch(`${this.apiBase}/getInventoryReport/api/GET-ReportService-getInventoryReport.json`, {
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
            const response = await fetch(`${this.apiBase}/createInventoryReport/api/POST-ReportService-createInventoryReport.json`, {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ inventoryDiscrepancies }),
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
            