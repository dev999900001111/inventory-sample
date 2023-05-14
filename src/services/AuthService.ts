
import {  } from '../models';

export class AuthService {

    private apiBase = '';

    async login(username: string, password: string): Promise<{success:boolean,token:string}> {
        try {
            const response = await fetch(`${this.apiBase}/login/api/POST-AuthService-login.json`, {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
            const data: {success:boolean,token:string} = await response.json();
            return data;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }
        

    async logout(): void {
        try {
            const response = await fetch(`${this.apiBase}/logout/api/GET-AuthService-logout.json`, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    'Content-Type': 'application/json',
                },
                
            });
            const data: void = await response.json();
            return data;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }
        
}
// export default AuthService;
            