
const axios = require('axios');


const getClima = async ( lat, lng ) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=4ffc9596ccad50ccd42ca965ad3d2309&units=metric`)
    
    return resp.data.main.temp;
}


module.exports = { 
    getClima
}