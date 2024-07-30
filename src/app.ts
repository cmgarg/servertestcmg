import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import http from 'http';
import { Server } from 'socket.io';

dotenv.config();

const app: Application = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 3000;

app.use(express.json());

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

io.on('connection', (socket) => {
  console.log('Usuario conectado');

  // Enviar notificación de prueba cuando se conecta un usuario
  socket.emit('notification', { message: 'Bienvenido a la aplicación!' });

  // Manejar desconexión de usuario
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

export { io };
