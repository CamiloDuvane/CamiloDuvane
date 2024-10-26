import axios from 'axios';
import { ApiService } from './apiService';

export class SpeciesService extends ApiService {
    constructor() {
        super();
    }

    async fetchSpecies(): Promise<any> {
        try {
            const response = await axios.get(`${this.baseUrl}/specie/`);
            return response.data;
        } catch (error) {
            console.error('Erro ao buscar espécies', error);
            throw error;
        }
    }
}