export abstract class ApiService {
    protected baseUrl: string;

    constructor() {
        this.baseUrl = process.env.VUE_APP_API_BASE_URL || 'http://localhost:3100';
    }
}
