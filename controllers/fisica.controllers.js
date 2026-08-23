export const calcularVelocidad=(req,res) => {
    const {distancia,tiempo}=req.body;
    const velocidad = distancia / tiempo
    res.json({
        distancia,
        tiempo,
        velocidad,
        "mensaje": `para recorrer una distancia de ${distancia} Metros en un tiempo de  ${tiempo} Metros se necesita una velocidad de ${velocidad} Metros`
    });
}

export const calcularTiempo=(req,res)=>{
    const{distancia,velocidad}=req.body;
    const tiempo=distancia / velocidad
    res.json({
        distancia,
        tiempo,
        velocidad,
        "mensaje":`Teniendo la  distancia ${distancia} Metros  en una velocidad de ${velocidad} Metros se tarda este tiempo ${tiempo} Metros `
    });
}

export const calcularDistancia=(req,res)=>{
    const{tiempo,velocidad}=req.body;
    const distancia=tiempo * velocidad
    res.json({
        distancia,
        tiempo,
        velocidad,
        "mensaje":` con una velocidad de   ${velocidad} Metros  y un tiempo de  ${tiempo} Metros recorre esta distancia ${distancia} Metros `
    });
}

export const calcularFuerza=(req,res)=>{
    const{aceleracion,masa}=req.body;
    const fuerza=aceleracion * masa
    res.json({
        fuerza,
        masa,
        aceleracion,
        "mensaje":`Teniendo la Masa ${masa} Metros etros con una aceleracion de ${aceleracion} Metros tiene esta fuerza ${fuerza} Metros `
    });
}
export const calcularPeso=(req,res)=>{
    const{masa,gramos}=req.body;
    const peso=gramos* masa
    res.json({
        gramos,
        masa,
        peso,
        "mensaje":`Teniendo la Masa ${masa} Metros  con esta cantidad  de gramos ${gramos} Metros tenemos un peso de  ${peso } Metros `
    }); 
}

export const calcularEnergiaCinetica=(req,res)=>{
    const{masa ,velocidad}=req.body;
    const energiacinetica= masa * velocidad **2 / 2
    res.json({
        energiacinetica,
        masa,
        velocidad,
        "mensaje":`Teniendo la Masa ${masa} Metros  con una velocidad de ${velocidad } Metros obtenemos esta energia cinetica ${energiacinetica} Metros `
    });
}
