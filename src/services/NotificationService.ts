
import { Notification } from '../models';

export class NotificationService {

    private apiBase = '';

    async getNotifications(): Promise<Notification[]> {
        try {
            const response = await fetch(`${this.apiBase}/getNotifications/api/GET-NotificationService-getNotifications.json`, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                },
                
            });
            const data: Notification[] = await response.json();
            return data;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }
        

    async markNotificationAsRead(notificationId: string): Promise<void> {
        try {
            const response = await fetch(`${this.apiBase}/markNotificationAsRead/api/POST-NotificationService-markNotificationAsRead.json`, {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ notificationId }),
            });
            const data: void = await response.json();
            return data;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }
        
}
// export default NotificationService;
            