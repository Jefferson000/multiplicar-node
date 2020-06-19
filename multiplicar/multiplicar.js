//requireds
const fs = require('fs');//Y existe en node y solo hay que definirla
const { colors } = require('colors');
//const fs = require('express); //No es de node pero son personas que ya lo hicieron
//const fs = require('./fs');  //Archivos que ya nosotros escribimos
let data = '';

listarTabla = (base,limite) =>{
    console.log(`======================================================`.green);
    console.log(`Tabla del ${base}, del 1 al ${limite}`.green);
    console.log(`======================================================`.green);
    for(let i = 1; i<=limite; i++){
        console.log(`${base} * ${i} = ${i*base}`);
    }
}

crearArchivo =  (base,limite) =>{
    return new Promise((resolve,reject)=>{
        if(!Number(base)){
            reject(`Algún valor introducido no es un número!`);
        } else{
            for(let i = 1; i <=limite; i++){
                data+=`${base} * ${i} = ${i*base}\n`;
            }
            fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
                if (err){
                    reject(`Error al crear el arhivo tabla/tabla-${base}.txt`);
                } else{
                    resolve( `tabla-${base}-del-1-al-${limite}.txt `);
                }
            });
        }
    }) 
}

module.exports = {
    crearArchivo,
    listarTabla
}