const axios = require('axios');


const getLugarLatLng = async(dir) => {

    //PREPARACION DE LA DIRECCION
    const encodeUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://geocode.xyz/Hauptstr.,+57632+"${encodeUrl}"?json=1`
    });


    //Llamado al servicio axios (trabajo con la API de geo)
    const resp = await instance.get();

    if (resp.data.standard.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data;
    const direccion = data.standard.city;
    const lng = data.longt;
    const lat = data.latt;


    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}