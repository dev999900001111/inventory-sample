
import { } from '../models';

export class AuthService {

    private apiBase = 'http://127.0.0.1:3001';

    async login(username: string, password: string): Promise<{ success: boolean, token: string }> {
        try {
            const response = await fetch(`${this.apiBase}/api/login-POST.json`, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                },
                // body: JSON.stringify({ username, password }),
            });
            const data: { success: boolean, token: string } = await response.json();
            return data;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }


    async logout() {
        try {
            const response = await fetch(`${this.apiBase}/api/logout-POST.json`, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                },

            });
            const data: void = await response.json();
            // return data;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

}
// export default AuthService;
