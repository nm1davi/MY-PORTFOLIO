import express from 'express';
import path from 'path';
import cors from 'cors';
import { __dirname } from './utils.js';
import nodemailerRouter from './routers/nodemailer.router.js';
import whatsappRouter from './routers/whatsapp.router.js';

const app = express();
console.log('SERVIDOR LEVANTADO');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../../FRONTEND/build')));

app.use('/api', nodemailerRouter, whatsappRouter);
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../Frontend/build', 'index.html'));
});

app.use((error, req, res, next) => {
  const message = `Ah ocurrido un error desconocido 😨: ${error.message}`;
  console.error(message);
  res.status(500).json({ message });
});

export default app;