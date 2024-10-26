import axios from 'axios';
import { ApiService } from './apiService';

export class BreedService extends ApiService {
    constructor() {
        super();
    }

    async fetchBreedsBySpecies(speciesIds: string[]): Promise<any> {
        try {
            const response = await axios.post(`${this.baseUrl}/breed/species`, { species: speciesIds });
            return response.data;
        } catch (error) {
            console.error('Erro ao buscar as raças pela espécie', error);
            throw error;
        }
    }
}
