import express from 'express';

import { buildApp } from './app';

const app = express();
buildApp(app);

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/graphql`);
});

server.on('error', console.error);
