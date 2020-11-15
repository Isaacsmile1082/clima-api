

const { getLugarLatLng } = require('./lugar/lugar');
const { getClima } = require('./clima/clima');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad a obtener el clima',
        demand: true
    }
}).argv;



// getLugarLatLng( argv.direccion )
//     .then( console.log )
//     .catch( console.log )

const getInfo = async ( dir ) => { 

    const { lat, lng } = await getLugarLatLng(dir);

    const res = await getClima( lat, lng );
    
    return res;
}



getInfo( argv.direccion )
    .then( res => console.log(`El clima de ${argv.direccion} es ${res}`))
    .catch( err => console.log(`No se pudo determinar el clima de ${argv.direccion}`, err));
