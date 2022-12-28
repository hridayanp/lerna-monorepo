import express from 'express';

export const serve = (port: number, filename: string, dir: string) => {
  const app = express();

  // app.use(express.static(dir));

  return new Promise<void>((resolve, reject) => {
    console.log('Listening on port', port);
    app.listen(port, resolve).on('error', reject);
  });
};
