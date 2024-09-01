// routes.ts
import { Router } from 'express';
import { io } from './app'; // Asegúrate de ajustar la ruta de importación según tu estructura de archivos

const router = Router();

router.post('/send-notification', (req, res) => {
  const { message } = req.body;
  io.emit('notification', { message });
  res.send('Notificación enviada');
});

export default router;
