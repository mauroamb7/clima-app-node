const axios = require('axios');

const getClima = async(lat, lng) => {

    const key = '31cd9e818b8ff09dcf980cdeb68485f4';
    const urlApi = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${key}&units=metric`;

    const resp = await axios.get(urlApi);


    //Devuelvo solo la temperatura
    return resp.data.main.temp;
}




module.exports = {

    getClima
}