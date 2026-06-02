import { createAppServer } from './app.js';

const PORT = 3000;

const server = createAppServer();

server.listen(PORT, () => {
  console.log(`[START] Server running on http://localhost:${PORT}`);
});