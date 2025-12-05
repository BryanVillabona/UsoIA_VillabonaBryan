//seleccion de elementos y url base
const inputUsuario = document.getElementById('inputNombre');
const botonAccion = document.getElementById('botonBuscar');
const contenedorTarjetas = document.getElementById('contenedorPersonajes');

const urlBase = 'https://rickandmortyapi.com/api/character';

//funcion para renderizar los personajes
function mostrarEnPantalla(listaPersonajes) {
    contenedorTarjetas.innerHTML = '';

    listaPersonajes.forEach(personaje => {
        const htmlTarjeta = `
            <div class="tarjeta">
                <img src="${personaje.image}" alt="${personaje.name}">
                <div class="descripcion">
                    <h2>${personaje.name}</h2>
                    <p>Estado: ${personaje.status}</p>
                </div>
            </div>
        `;

        contenedorTarjetas.innerHTML += htmlTarjeta;
    });
}

//funcion para obtener los datos
async function obtenerPersonajes(nombre = '') {
    try {
        let urlFinal = urlBase;
        if (nombre !== '') {
            urlFinal += `/?name=${nombre}`;
        }

        const respuesta = await fetch(urlFinal);
        
        const datos = await respuesta.json();

        if (datos.error) {
            contenedorTarjetas.innerHTML = '<p>No se encontró ese personaje</p>';
            return;
        }

        mostrarEnPantalla(datos.results);

    } catch (error) {
        console.error('Hubo un error:', error);
    }
}

//evento click para el boton
botonAccion.addEventListener('click', () => {
    const nombreBusqueda = inputUsuario.value;
    obtenerPersonajes(nombreBusqueda);
});

obtenerPersonajes();