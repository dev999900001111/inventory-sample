
import { InventorySummary, Item, InventoryCount } from '../models';

export class InventoryService {

    private apiBase = 'http://127.0.0.1:3001';

    async getInventorySummary(): Promise<InventorySummary> {
        try {
            const response = await fetch(`${this.apiBase}/api/inventory/summary-GET.json`, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                },

            });
            const data: InventorySummary = await response.json();
            return data;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }


    async getInventoryItems(): Promise<Item[]> {
        try {
            const response = await fetch(`${this.apiBase}/api/inventory/items-GET.json`, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                },

            });
            const data: Item[] = await response.json();
            return data;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }


    async getItemsToReorder(): Promise<Item[]> {
        try {
            const response = await fetch(`${this.apiBase}/api/inventory/reorder-GET.json`, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                },

            });
            const data: Item[] = await response.json();
            return data;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }


    async adjustInventory(inventoryCounts: InventoryCount[], adjustmentReason: string): Promise<void> {
        try {
            const response = await fetch(`${this.apiBase}/api/inventory/adjust-POST.json`, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                },
                // body: JSON.stringify({ inventoryCounts, adjustmentReason }),
            });
            const data: void = await response.json();
            return data;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }


    async conductInventory(inventoryCounts: InventoryCount[], date: string, time: string): Promise<void> {
        try {
            const response = await fetch(`${this.apiBase}/api/inventory/conduct-POST.json`, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                },
                // body: JSON.stringify({ inventoryCounts, date, time }),
            });
            const data: void = await response.json();
            return data;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

}
// export default InventoryService;
