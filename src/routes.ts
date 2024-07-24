import { Router, Request, Response } from "express";
import { Schema, model } from "mongoose";
const router: Router = Router();

const schemaPajaritos = new Schema({
  nombre: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  habitat: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
});

const modelPajarito = model("pajaritos", schemaPajaritos);

// Ejemplo de ruta GET
router.get("/", (req: Request, res: Response) => {
  res.send("Buenos dias a la casa de los pajaritos");
});

router.get("/obtenerPajaritos", (req: Request, res: Response) => {
  modelPajarito.find(
    {},
    (err: any, pajaritos: { name: string; habitat: string }[]) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(pajaritos);
      }
    }
  );
});
router.post("/agregarPajarito", (req: Request, res: Response) => {
  const pajarito = new modelPajarito(req.body);
  pajarito
    .save()
    .then(() => {
      res.send("Pajarito agregado correctamente");
    })
    .catch((err) => {
      res.send(err.body);
    });
});

// Aquí puedes añadir más rutas según necesites

export default router;
