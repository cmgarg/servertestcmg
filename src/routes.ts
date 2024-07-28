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
//MARTIN COME PITO
// Ejemplo de ruta GET
router.get("/", (req: Request, res: Response) => {
  res.send("Buenos dias a la casa de los pajaritos y martin pelotudo");
});

router.get("/obtenerPajaritos", async (req: Request, res: Response) => {
  try {
    const pajaritos = await modelPajarito.find({});
    res.json(pajaritos);
  } catch (err) {
    res.status(500).send(err);
  }
});
router.get("/obtenerGatos", async (req: Request, res: Response) => {
  try {
    const pajaritos = await modelPajarito.find({});
    res.json(pajaritos);
  } catch (err) {
    res.status(500).send(err);
  }
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
//PENE se come gonzalo por las nalgasasdasd

export default router;
