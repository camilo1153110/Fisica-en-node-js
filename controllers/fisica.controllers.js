export const calcularVelocidad=(req,res) => {
    const {distancia,tiempo}=req.body;
    const velocidad = distancia / tiempo
    res.json({
        distancia,
        tiempo,
        velocidad,
        "mensaje": `para recorrer una distancia de ${distancia} en un tiempo de  ${tiempo} se necesita una velocidad de ${velocidad}`
    });
}

export const calcularTiempo=(req,res)=>{
    const{distancia,velocidad}=req.body;
    const tiempo=distancia / velocidad
    res.json({
        distancia,
        tiempo,
        velocidad,
        "mensaje":`Teniendo la  distancia ${distancia}  en una velocidad de ${velocidad} se tarda este tiempo ${tiempo} `
    });
}

export const calcularDistancia=(req,res)=>{
    const{tiempo,velocidad}=req.body;
    const distancia=tiempo * velocidad
    res.json({
        distancia,
        tiempo,
        velocidad,
        "mensaje":` con una velocidad de   ${velocidad}  y un tiempo de  ${tiempo} recorre esta distancia ${distancia} `
    });
}

export const calcularFuerza=(req,res)=>{
    const{aceleracion,masa}=req.body;
    const fuerza=aceleracion * masa
    res.json({
        fuerza,
        masa,
        aceleracion,
        "mensaje":`Teniendo la Masa ${masa}  con una aceleracion de ${aceleracion} tiene esta fuerza ${fuerza} `
    });
}
export const calcularPeso=(req,res)=>{
    const{masa,gramos}=req.body;
    const peso=gramos* masa
    res.json({
        gramos,
        masa,
        peso,
        "mensaje":`Teniendo la Masa ${masa}  con esta cantidad  de gramos ${gramos} tenemos un peso de  ${peso} `
    });
}

export const calcularEnergiaCinetica=(req,res)=>{
    const{masa ,velocidad}=req.body;
    const energiacinetica= masa * velocidad **2 / 2
    res.json({
        energiacinetica,
        masa,
        velocidad,
        "mensaje":`Teniendo la Masa ${masa}  con una velocidad de ${velocidad} obtenemos esta energia cinetica ${energiacinetica} `
    });
}
