
import { Supplier, Item, PurchaseOrder } from '../models';

export class SupplierService {

    private apiBase = 'http://127.0.0.1:3001';

    async getSuppliers(): Promise<Supplier[]> {
        try {
            const response = await fetch(`${this.apiBase}/api/suppliers-GET.json`, {
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
            const response = await fetch(`${this.apiBase}/api/suppliers/purchase-order-POST.json`, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                },
                // body: JSON.stringify({ supplier, item, quantity }),
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
