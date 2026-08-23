export const calcularVelocidad=(req,res) => {
    const {distancia,tiempo}=req.body;
    const velocidad = distancia / tiempo
    res.json({
        distancia,
        tiempo,
        velocidad,
        "mensaje": `para recorrer una distancia de ${distancia}M en un tiempo de  ${tiempo}M se necesita una velocidad de ${velocidad}M`
    });
}

export const calcularTiempo=(req,res)=>{
    const{distancia,velocidad}=req.body;
    const tiempo=distancia / velocidad
    res.json({
        distancia,
        tiempo,
        velocidad,
        "mensaje":`Teniendo la  distancia ${distancia}M  en una velocidad de ${velocidad}M se tarda este tiempo ${tiempo}M `
    });
}

export const calcularDistancia=(req,res)=>{
    const{tiempo,velocidad}=req.body;
    const distancia=tiempo * velocidad
    res.json({
        distancia,
        tiempo,
        velocidad,
        "mensaje":` con una velocidad de   ${velocidad}M  y un tiempo de  ${tiempo}M recorre esta distancia ${distancia}M `
    });
}

export const calcularFuerza=(req,res)=>{
    const{aceleracion,masa}=req.body;
    const fuerza=aceleracion * masa
    res.json({
        fuerza,
        masa,
        aceleracion,
        "mensaje":`Teniendo la Masa ${masa}M  con una aceleracion de ${aceleracion}M tiene esta fuerza ${fuerza}M `
    });
}
export const calcularPeso=(req,res)=>{
    const{masa,gramos}=req.body;
    const peso=gramos* masa
    res.json({
        gramos,
        masa,
        peso,
        "mensaje":`Teniendo la Masa ${masa}M  con esta cantidad  de gramos ${gramos}M tenemos un peso de  ${peso}M `
    });
}

export const calcularEnergiaCinetica=(req,res)=>{
    const{masa ,velocidad}=req.body;
    const energiacinetica= masa * velocidad **2 / 2
    res.json({
        energiacinetica,
        masa,
        velocidad,
        "mensaje":`Teniendo la Masa ${masa}M  con una velocidad de ${velocidad}M obtenemos esta energia cinetica ${energiacinetica}M `
    });
}
