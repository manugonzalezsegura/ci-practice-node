import http from 'http';

const PORT = 3000;

const server = http.createServer((request, response) => {
  console.log(`[REQUEST] ${request.method} ${request.url}`);

  if (request.method === 'GET' && request.url === '/health') {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(
      JSON.stringify({
        status: 'ok',
        message: 'CI practice API is running',
      }),
    );

    return;
  }

  response.writeHead(404, { 'Content-Type': 'application/json' });
  response.end(
    JSON.stringify({
      error: 'Not Found',
    }),
  );
});

server.listen(PORT, () => {
  console.log(`[START] Server running on http://localhost:${PORT}`);
});