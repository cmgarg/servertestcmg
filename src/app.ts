import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';

dotenv.config();

const app: Application = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // Cambia esto a tu URL frontend
    methods: ["GET", "POST"]
  }
});

const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: "http://localhost:3001" // Cambia esto a tu URL frontend
}));

app.use(express.json());

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

io.on('connection', (socket) => {
  console.log('Usuario conectado');

  socket.emit('notification', { message: 'Bienvenido a la aplicación!' });

  socket.on('disconnect', () => {
    console.log('Usuario desconectado');
  });
});

// Ruta para enviar una notificación
app.post('/send-notification', (req: Request, res: Response) => {
  const { message } = req.body;
  io.emit('notification', { message });
  res.send('Notificación enviada');
});
