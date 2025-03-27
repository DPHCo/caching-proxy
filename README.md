# Caching Proxy

This is a proxy application with a caching system that acts as an intermediary between the client and an external API. The application caches responses to improve performance and reduce load on the origin server.

## Features

- HTTP proxy for any external API
- Response caching system
- Flexible configuration through command-line parameters
- Cache headers to monitor hits/misses
- Option to manually clear the cache

## Requirements

- Node.js (version 12 or higher)
- npm (included with Node.js)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/DPHCo/caching-proxy.git
cd caching-proxy
```

2. Install dependencies:
```bash
npm install
```

## Usage

The application can be started with different configuration parameters:

### Basic Parameters

```bash
caching-proxy --port <number> --origin <url>
```

### Available Parameters

- `--port` or `-port`: Port where the server will run
- `--origin` or `-origin`: URL of the external API to proxy
- `--clear-cache` or `-clear-cache`: Clears the cache when starting the server

### Examples

1. Start the server on port 3000 to proxy an API:
```bash
caching-proxy --port 3000 --origin https://pokeapi.co/api/v2
```

2. Clear the cache:
```bash
caching-proxy --clear-cache
```

## Response Headers

The application includes special headers in responses:

- `X-Cache`: Indicates if the response was served from cache
  - `Hit`: Response was served from cache
  - `Miss`: Response was obtained from the external API

## Notes

- Cache is maintained in memory, so it will be lost when the server restarts
- It's recommended to use the `--clear-cache` option when cached data might be outdated
- The application is designed to handle JSON responses from the external API