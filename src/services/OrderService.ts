
import { Order, OrderDetails, OrderData } from '../models';

export class OrderService {

    private apiBase = 'http://127.0.0.1:3001';

    async getRecentOrders(): Promise<Order[]> {
        try {
            const response = await fetch(`${this.apiBase}/api/orders/recent-GET.json`, {
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
            const response = await fetch(`${this.apiBase}/api/orders/1-GET.json`, {
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
            const response = await fetch(`${this.apiBase}/api/orders/create-POST.json`, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                },
                // body: JSON.stringify({ orderData }),
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
