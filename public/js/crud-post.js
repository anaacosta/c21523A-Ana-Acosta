export const crearPublicaciones = async (datos) => {
    const response = await fetch('/publicacion', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(datos)
    })

    const data = await response.json()
    return data;
}

export const obtenerPublicaciones = async ( ) => {
    // Consulta al servidor por los datos de publicaciones
    const response = await fetch('/publicaciones');
    const publicaciones = await response.json();
    return publicaciones
}

export const actualizarPublicacion = async (id) => {
    fetch()
  
}

export const eliminarPublicacion = async (id) => {
    fetch()
  
}

// FUNCIONES PARA MOSTRAR DATOS
export const mostrarDatosPublicaciones = (publicaciones, elemento) => {
    let registros = '';
    publicaciones.forEach(pub => {
        registros += `
            <section class="d-flex gap-4">
                <img src="${pub.url_imagen}" class="rounded" height="200" width="400" id:"imagen">
                <div class="d-flex flex-column justify-content-between">
                    <h3 id:"titulo-publicacion">${pub.titulo}</h3>
                    <p id:"detalle">${pub.detalle}</p>
                    <p>${pub.fecha_publicacion}</p>
                </div>
            </section>
        `
    });

    elemento.innerHTML = registros
}
