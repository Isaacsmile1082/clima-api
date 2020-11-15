const axios = require('axios');

const getLugarLatLng = async dir => {

    const encodedURL = encodeURI( dir );
    console.log( encodedURL );
    
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
        headers: {
            'x-rapidapi-key': '7c889f9846mshceb39804236034cp1e77ebjsn6b9c3ebf3aef',
            'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com'
        }
    });


    const res = await instance.get();


    if ( res.data.Results.length === 0 )
        throw new Error(`No hay resultados para la direccion ${dir}`);

    
        const data = resp.data.Results[0];
        const direccion = data.name;
        const lat = data.lat;
        const lng = data.lon;

        return {
            direccion,
            lat,
            lng,
        }
}

module.exports = {

    getLugarLatLng
}