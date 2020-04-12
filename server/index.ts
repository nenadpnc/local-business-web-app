import next from 'next';
import express from 'express';
import expressStaticGzip from 'express-static-gzip';
import logger from './logger';

const port = parseInt(process.env.PORT || '3002', 10);
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, dir: './client' });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const expressServer = express();

    if (!dev) {
      // serve gziped files in production
      expressServer.use('/_next', expressStaticGzip('./_next'));
    }
    expressServer.get('*', (req, res) => handle(req, res));
    expressServer.listen(port, (err: Error) => {
      if (err) {
        logger.error('something bad happened', err);
      } else {
        logger.info(`> Ready on http://localhost:${port}`);
      }
    });
  });