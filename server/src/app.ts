import express, { Express, Request, Response } from 'express';
// import dotenv from 'dotenv';

// dotenv.config();

const app: Express = express();
const port: Number = Number(process.env.PORT) || 5000;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});