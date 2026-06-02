import http from 'http';
import { getHealthResponse } from './health.js';

export function createAppServer(): http.Server {
  return http.createServer((request, response) => {
    console.log(`[REQUEST] ${request.method} ${request.url}`);

    if (request.method === 'GET' && request.url === '/health') {
      response.writeHead(200, { 'Content-Type': 'application/json' });
      response.end(JSON.stringify(getHealthResponse()));
      return;
    }

    response.writeHead(404, { 'Content-Type': 'application/json' });
    response.end(
      JSON.stringify({
        error: 'Not Found',
      }),
    );
  });
}