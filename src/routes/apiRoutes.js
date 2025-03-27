const express = require('express');
const router = express.Router();
const options = require('../config/config');
const cacheService = require('../services/cacheService');
const ApiService = require('../services/apiService');

const apiService = new ApiService(options.origin);

router.get('/favicon.ico', (req, res) => res.status(204).end());

router.get('*', async (req, res) => {
    try {
        if (cacheService.has(req.url)) {
            res.setHeader('X-Cache', 'Hit');
            res.json(cacheService.get(req.url));
            return;
        }

        const data = await apiService.getData(req.url);
        res.setHeader('X-Cache', 'Miss');
        cacheService.set(req.url, data.name);
        res.json(data.name);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router; 