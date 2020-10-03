const lugar = require('../lugar/lugar');
const clima = require('../clima/clima');

const getInfo = async(direccion) => {





    try {
        const respLugar = await lugar.getLugarLatLng(direccion);
        const respClima = await clima.getClima(respLugar.lat, respLugar.lng);

        return `El clima en ${respLugar.direccion} es de ${respClima}`;

    } catch (error) {
        return `No se encontro el clima de ${respLugar.direccion}`;
    }


}

module.exports = {
    getInfo
}