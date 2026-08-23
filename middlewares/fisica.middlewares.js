export const validarVelocidad=(req,res,next)=>{

    
    const {distancia,tiempo}=req.body;
    if(tiempo ===undefined || distancia ===undefined){
        return res.status(400).json({
            "Mensaje":"Datos incompletos"
        });
    };
    if(tiempo<=0){
        return res.status(400).json({
            "mensaje": "el tiempo debe ser mayor a 0"
        });
        
    };
    if (typeof tiempo !== "number" || typeof distancia !=="number"){
        return res.status(400).json({
            "mensaje":"el tiempo y la distancia deben ser numeros"
        });
    };

    
    next();


}

export const validarTiempo=(req,res,next)=>{
    const {distancia,velocidad}=req.body;
      if(velocidad ===undefined || distancia ===undefined){
        return res.status(400).json({
            "Mensaje":"Datos incompletos"
        });
    };
    if(velocidad<=0){
        return res.status(400).json({
            "mensaje": "La velocidad debe ser mayor a 0"
        });
        
    };
    if (typeof velocidad !== "number" || typeof distancia !=="number"){
        return res.status(400).json({
            "mensaje":"la velocidad  y la distancia deben ser numeros"
        });
    };

  
    next();


}
export const validarDistancia=(req,res,next)=>{
    const {velocidad,tiempo}=req.body;
    
    if(tiempo ===undefined || velocidad ===undefined){
        return res.status(400).json({
            "Mensaje":"Datos incompletos"
        });
    };
    if(velocidad<=0){
        return res.status(400).json({
            "mensaje": "la velocidad  debe ser mayor a 0"
        });

        
    };
    if(tiempo<=0){
        return res.status(400).json({
            "mensaje": "el tiempo debe ser mayor a 0"
        });
        
        
    };
    if (typeof velocidad !== "number" || typeof tiempo !=="number"){
        return res.status(400).json({
            "mensaje":"el tiempo y la velocidad deben ser numeros"
        });
    };

    next();


}

export const validarFuerza=(req,res,next)=>{
    const {aceleracion,masa}=req.body;
     if(aceleracion ===undefined || masa ===undefined){
        return res.status(400).json({
            "Mensaje":"Datos incompletos"
        });
    };
    if(aceleracion<=0){
        return res.status(400).json({
            "mensaje": "la aceleracion  debe ser mayor a 0"
        });

        
    };
    if(masa<=0){
        return res.status(400).json({
            "mensaje": "la masa debe ser mayor a 0"
        });
        
        
    };
    if (typeof aceleracion !== "number" || typeof masa !=="number"){
        return res.status(400).json({
            "mensaje":"la aceleracion  y la masa deben ser numeros"
        });
    };

   
    next();


}

export const validarPeso=(req,res,next)=>{
    const {masa,gramos}=req.body;
       if(masa ===undefined || gramos ===undefined){
        return res.status(400).json({
            "Mensaje":"Datos incompletos"
        });
    };
    if(masa<=0){
        return res.status(400).json({
            "mensaje": "la masa  debe ser mayor a 0"
        });

        
    };
    if(gramos<=0){
        return res.status(400).json({
            "mensaje": " los gramos deben ser mayor a 0"
        });
        
        
    };
    if (typeof masa !== "number" || typeof gramos !=="number"){
        return res.status(400).json({
            "mensaje":"la masa y los gramos deben ser numeros"
        });
    };

 
    next();


}
export const validarEnergiaCinetica=(req,res,next)=>{
    const {masa,velocidad}=req.body;
    if(masa ===undefined || velocidad ===undefined){
        return res.status(400).json({
            "Mensaje":"Datos incompletos"
        });
    };
    if(masa<=0){
        return res.status(400).json({
            "mensaje": "la masa  debe ser mayor a 0"
        });

        
    };
    if(velocidad<=0){
        return res.status(400).json({
            "mensaje": "la velocidad debe ser mayor a 0"
        });
        
        
    };
    if (typeof masa !== "number" || typeof velocidad !=="number"){
        return res.status(400).json({
            "mensaje":"la masa y la velocidad deben ser numeros"
        });
    };

    
    next();


}

