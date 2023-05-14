
import { Order, OrderDetails, OrderData } from '../models';

export class OrderService {

    private apiBase = '';

    async getRecentOrders(): Promise<Order[]> {
        try {
            const response = await fetch(`${this.apiBase}/getRecentOrders/api/GET-OrderService-getRecentOrders.json`, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                },
                
            });
            const data: Order[] = await response.json();
            return data;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }
        

    async getOrderDetails(orderId: string): Promise<OrderDetails> {
        try {
            const response = await fetch(`${this.apiBase}/getOrderDetails/api/GET-OrderService-getOrderDetails.json`, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                },
                
            });
            const data: OrderDetails = await response.json();
            return data;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }
        

    async createOrder(orderData: OrderData): Promise<Order> {
        try {
            const response = await fetch(`${this.apiBase}/createOrder/api/POST-OrderService-createOrder.json`, {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ orderData }),
            });
            const data: Order = await response.json();
            return data;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }
        
}
// export default OrderService;
            