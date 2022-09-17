// cargar mas peliculas del catalogo
let catalogo = 1;
const cargar = document.getElementById('cargarPeliculas');

cargar.addEventListener("click", () => {

    if (catalogo < 1000) {
        catalogo += 1;
        mostrarapi();
    }
});

// 


// declaracion de variables

const contenidoCarrito = document.getElementById('tablaCompras');

const compraTotal = document.getElementById('compraTotal');

let carrito = [];

//

//Guardando las compras en el localStorage
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'));
        actualizarcarrito();
    }
});

//


//mostrando elementos del endpoint de la API
const mostrarapi = async () => {
    const urlapi2 = `https://api.themoviedb.org/3/movie/popular?api_key=8b80abc3eb76e7827412b2b29e6f484f&page=${catalogo}`;

    try {
        const respuesta = await fetch(urlapi2);

        const apipeliculas = await respuesta.json();

        apipeliculas.results.forEach(apipelicula => {
            document.querySelector("#listadoapi").innerHTML += `

                <div class="col-lg-4 col-sm-6 col-12">
                    <div class="card text-white bg-dark mt-3">
                        <div class="card-body">
                            <h3 class="main__subtitulo card-tittle">${apipelicula.title}</h3>
                                <div class="main__parrafo">
                                    <p class="card-text">${apipelicula.overview}</p>
                                </div>
                                    <br>
                                        <img src="https://image.tmdb.org/t/p/w500/${apipelicula.poster_path}" class="card-img" alt="pelicula">

                                <div>
                                    <br>
                                        <h2><strong>$${apipelicula.vote_count}</strong></h2>
                                    <br>
                                        <button type="button" class="btn btn-success" id="botonCompra${apipelicula.id}"><a target>COMPRAR</a></button>
                                </div>
                        </div>
                    </div>
                </div>
                `;
        });

        apipeliculas.results.forEach(apipelicula => {
            document.getElementById(`botonCompra${apipelicula.id}`).addEventListener("click", function () {



                agregarPelicula(apipelicula);
            });
        })

    }
    catch (error) {

        console.log(error + "error en la peticion");

    }

}

//

// agregar elementos al carrito
function agregarPelicula(apipelicula) {
    carrito.push(apipelicula);
    Swal.fire('agregaste <strong>' + apipelicula.title + "</strong> a tu compra");
    actualizarcarrito();
}

//

// quitar elementos del carrito
function quitardelCarrito(elemento) {
    const quitarelemento = carrito.find((apipelicula) => apipelicula.id === elemento);
    const posicion = carrito.indexOf(quitarelemento);
    carrito.splice(posicion, 1);
    actualizarcarrito();
}

//

// vaciar todo el carrito
const vaciar = document.getElementById("vaciarCarrito");
vaciar.addEventListener("click", function () {
    carrito.length = 0;
    actualizarcarrito();
});

//


// mostrar contenido al carrito
function actualizarcarrito() {

    contenidoCarrito.innerHTML = "";

    carrito.forEach(apipelicula => {
        contenidoCarrito.innerHTML += `
        <td>${apipelicula.id}</td>
        <td>${apipelicula.title}</td>
        <td>${apipelicula.vote_count}$</td>
        <td><button onclick="quitardelCarrito(${apipelicula.id})" type="button" class="btn btn-danger"><a target>QUITAR</a></button></td>
        `;
        localStorage.setItem('carrito', JSON.stringify(carrito));
    });
    compraTotal.innerText = carrito.reduce((acum, apipelicula) => acum + apipelicula.vote_count, 0);
}

// 


// Terminar pedido

const terminarPedido = document.getElementById("terminarPedido");
terminarPedido.addEventListener("click", function () {
    const modal = document.getElementById("contenidoModal");
    const botonesCompra = document.getElementById("botonesCompra");

    if (carrito.length >= 1) {
        modal.innerHTML = `
        <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Ingrese un Nombre de Usuario</label>
        <input type="text" class="form-control" id="usuario" aria-describedby="emailHelp">
        </div>
        
        <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Ingrese una CLAVE (para retitar el pedido)</label>
        <input type="password" class="form-control" id="clave">
        </div>`;

        botonesCompra.innerHTML = `
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar Compra</button>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModall" id="confirmar"><a target>CONFIRMAR</a></button>
        `;

        const confirmar = document.getElementById("confirmar");

        confirmar.addEventListener("click", function () {
            const usuario = document.getElementById("usuario").value;
            const clave = document.getElementById("clave").value;



            const modall = document.getElementById("contenidoModall");
            modall.innerHTML = `
            <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Vuelva a ingresar la CLAVE</label>
            <input type="password" class="form-control" id="clave2">
            </div>
            `;

            const terminar = document.getElementById("Terminar");
            terminar.addEventListener("click", function () {

                const clave2 = document.getElementById("clave2").value;

                if (clave == clave2) {
                    Swal.fire("<strong>" + usuario + "</strong><br> Tu pedido esta completado");
                }
                else {
                    Swal.fire("Ingresaste mal la CLAVE");
                }
            })
        })
    }
    else {

        modal.innerHTML = `
        <p>EL CARRITO ESTA VACIO</p>
        `;

        botonesCompra.innerHTML = `
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">CERRAR</button>
        `;

    }
})

// 

mostrarapi();