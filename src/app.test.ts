import type { Server } from 'http';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { createAppServer } from './app.js';

describe('GET /health', () => {
  let server: Server;
  let baseUrl: string;

  beforeAll(async () => {
    server = createAppServer();

    await new Promise<void>((resolve) => {
      server.listen(0, () => {
        const address = server.address();

        if (address && typeof address === 'object') {
          baseUrl = `http://localhost:${address.port}`;
        }

        resolve();
      });
    });
  });

  afterAll(async () => {
    await new Promise<void>((resolve, reject) => {
      server.close((error) => {
        if (error) {
          reject(error);
          return;
        }

        resolve();
      });
    });
  });

  it('should return health response successfully', async () => {
    const response = await fetch(`${baseUrl}/health`);
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body).toEqual({
      status: 'oki',
      message: 'CI practice API is running',
    });
  });

  it('should return 404 when route does not exist', async () => {
  const response = await fetch(`${baseUrl}/unknown-route`);
  const body = await response.json();

  expect(response.status).toBe(404);
  expect(body).toEqual({
    error: 'Not Found',
  });
});
});
