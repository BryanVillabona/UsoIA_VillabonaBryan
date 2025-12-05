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

