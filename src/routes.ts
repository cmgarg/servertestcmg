import { Router, Request, Response } from 'express';
import { Schema, model } from 'mongoose';
import { io } from './app'; // Asegúrate de ajustar la ruta de importación según tu estructura de archivos

const router: Router = Router();

router.post('/send-notification', (req: Request, res: Response) => {
  const { message } = req.body;
  io.emit('notification', { message });
  res.send('Notificación enviada');
});

export default router;
