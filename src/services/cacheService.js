const NodeCache = require('node-cache');

class CacheService {
    constructor() {
        this.cache = new NodeCache();
    }

    get(key) {
        return this.cache.get(key);
    }

    set(key, value) {
        return this.cache.set(key, value);
    }

    has(key) {
        return this.cache.has(key);
    }

    flushAll() {
        return this.cache.flushAll();
    }
}

module.exports = new CacheService(); 