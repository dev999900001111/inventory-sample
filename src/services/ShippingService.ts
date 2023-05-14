
import { ShippingArrangement, InventoryAllocation, ShippingList, CarrierDetails, ShipmentStatus, Carrier } from '../models';

export class ShippingService {

    private apiBase = 'http://127.0.0.1:3001';

    async getShippingArrangements(orderId: string): Promise<ShippingArrangement[]> {
        try {
            const response = await fetch(`${this.apiBase}/api/shipping/1-GET.json`, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                },

            });
            const data: ShippingArrangement[] = await response.json();
            return data;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }


    async createShippingArrangement(orderId: string, shippingDate: string, carrier: Carrier): Promise<ShippingArrangement> {
        try {
            const response = await fetch(`${this.apiBase}/api/shipping/create-POST.json`, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                },
                // body: JSON.stringify({ orderId, shippingDate, carrier }),
            });
            const data: ShippingArrangement = await response.json();
            return data;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }


    async getInventoryAllocation(): Promise<InventoryAllocation[]> {
        try {
            const response = await fetch(`${this.apiBase}/api/inventory/allocation-GET.json`, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                },

            });
            const data: InventoryAllocation[] = await response.json();
            return data;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }


    async executeShipment(shippingList: ShippingList[], carrierDetails: CarrierDetails): Promise<void> {
        try {
            const response = await fetch(`${this.apiBase}/api/shiping/execute-POST.json`, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                },
                // body: JSON.stringify({ shippingList, carrierDetails }),
            });
            const data: void = await response.json();
            return data;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }


    async trackShipment(trackingNumber: string): Promise<ShipmentStatus> {
        try {
            const response = await fetch(`${this.apiBase}/api/shipping/track/1234567890-GET.json`, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                },
                // body: JSON.stringify({ trackingNumber }),
            });
            const data: ShipmentStatus = await response.json();
            return data;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

}
// export default ShippingService;
