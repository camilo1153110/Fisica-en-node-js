import express from "express";
import {calcularEnergiaCinetica, calcularVelocidad,calcularTiempo,calcularDistancia,calcularFuerza,calcularPeso} from "../controllers/fisica.controllers.js"
import { validarVelocidad,validarTiempo , validarDistancia,validarFuerza,validarPeso,validarEnergiaCinetica} from "../middlewares/fisica.middlewares.js";

const router=express.Router();
router.post("/velocidad",validarVelocidad,calcularVelocidad);
router.post("/tiempo",validarTiempo,calcularTiempo);
router.post("/distancia",validarDistancia,calcularDistancia);
router.post("/fuerza", validarFuerza,calcularFuerza);
router.post("/peso",validarPeso,calcularPeso);
router.post("/energiaCinetica",validarEnergiaCinetica,calcularEnergiaCinetica);
//definimos una ruta con datos de entradda, y las funciones a ejecutar

export default router;
