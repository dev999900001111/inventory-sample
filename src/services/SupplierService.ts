
import { Supplier, Item, PurchaseOrder } from '../models';

export class SupplierService {

    private apiBase = '';

    async getSuppliers(): Promise<Supplier[]> {
        try {
            const response = await fetch(`${this.apiBase}/getSuppliers/api/GET-SupplierService-getSuppliers.json`, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                },
                
            });
            const data: Supplier[] = await response.json();
            return data;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }
        

    async createPurchaseOrder(supplier: Supplier, item: Item, quantity: number): Promise<PurchaseOrder> {
        try {
            const response = await fetch(`${this.apiBase}/createPurchaseOrder/api/POST-SupplierService-createPurchaseOrder.json`, {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ supplier, item, quantity }),
            });
            const data: PurchaseOrder = await response.json();
            return data;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }
        
}
// export default SupplierService;
            