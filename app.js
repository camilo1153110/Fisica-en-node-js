import express from  "express";
import fisicaRoutes from "./routes/fisica.routes.js";
const app=express(); //asignamos la funcion express a la constante app
const port=3000; // definimos el puerto 

app.use(express.json()); //Indicamos que usaremos formato JSON en express 

app.use("/fisica",fisicaRoutes);

app.listen(port,()=>{ //Le decimos a la aplicacion por cual puerto sera escuchado y enviamos un mensaje por consola
    console.log(`La aplicacion esta corriendo en el puerto ${port}`);
})
