import axios from 'axios';
import { ApiService } from './apiService';

export class AuthService extends ApiService {
    constructor() {
        super();
    }

    async register(data: object): Promise<any> {
        try {
            const response = await axios.post(`${this.baseUrl}/auth/register`, data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return response.data;
        } catch (error) {
            console.error('Erro ao cadastrar o usuário', error);
            throw error;
        }
    }

    async login(data: object): Promise<any> {
        try {
            const response = await axios.post(`${this.baseUrl}/auth/login`, data, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true,
            });
            return response.data;
        } catch (error) {
            console.error('Erro ao cadastrar o usuário', error);
            throw error;
        }
    }
}