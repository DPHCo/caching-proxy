const axios = require('axios');

class ApiService {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    async getData(url) {
        try {
            const response = await axios.get(`${this.baseUrl}${url}`);
            
            return response.data;
        } catch (error) {
            throw new Error(`Error al obtener datos de la API: ${error.message}`);
        }
    }
}

module.exports = ApiService; 