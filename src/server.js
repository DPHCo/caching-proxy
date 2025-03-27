#!/usr/bin/env node

const express = require('express');
const options = require('./config/config');
const apiRoutes = require('./routes/apiRoutes');
const cacheService = require('./services/cacheService');

const app = express();
// Middleware
app.use(express.json());

// Rutas
app.use('/', apiRoutes);

// Iniciar servidor
if (options.clearCache) {
    cacheService.flushAll();
    console.log('Clean Cache');
}

app.listen(options.port, () => {
    console.log(`Server started in port ${options.port}`);
    console.log(`Proxy configured to: ${options.origin}`);
}); 