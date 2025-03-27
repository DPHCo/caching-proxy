const yargs = require('yargs');

const options = yargs
    .usage('Usage --port <number> --origin <url>')
    .option('-port', { 
        alias: 'port', 
        describe: 'Server Port', 
        type: 'number'
    })
    .option('-origin', { 
        alias: 'urlOrigin', 
        describe: 'URL de origen para el proxy',
        type: 'string',
    })
    .option('-clear-cache', { 
        alias: 'clearCache', 
        describe: 'Clear cache', 
        type: 'boolean',
    })
    .argv;

module.exports = options; 