
import { ShippingArrangement, InventoryAllocation, ShippingList, CarrierDetails, ShipmentStatus } from '../models';

export class ShippingService {

    private apiBase = '';

    async getShippingArrangements(orderId: string): Promise<ShippingArrangement[]> {
        try {
            const response = await fetch(`${this.apiBase}/getShippingArrangements/api/GET-ShippingService-getShippingArrangements.json`, {
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
            const response = await fetch(`${this.apiBase}/createShippingArrangement/api/POST-ShippingService-createShippingArrangement.json`, {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ orderId, shippingDate, carrier }),
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
            const response = await fetch(`${this.apiBase}/getInventoryAllocation/api/GET-ShippingService-getInventoryAllocation.json`, {
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
            const response = await fetch(`${this.apiBase}/executeShipment/api/POST-ShippingService-executeShipment.json`, {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ shippingList, carrierDetails }),
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
            const response = await fetch(`${this.apiBase}/trackShipment/api/POST-ShippingService-trackShipment.json`, {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ trackingNumber }),
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
            