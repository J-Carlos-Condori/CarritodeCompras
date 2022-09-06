mostrarapi();
function mostrarapi() {
    const urlapi = "https://api.themoviedb.org/3/movie/popular?api_key=8b80abc3eb76e7827412b2b29e6f484f";
    fetch(urlapi)
        .then(resultado => resultado.json())
        .then(lpeliculas => {

            const apipeliculas = lpeliculas.results;
            console.log(lpeliculas.results);

            apipeliculas.forEach(apipelicula => {
                document.querySelector("#listadoapi").innerHTML += `
                <div class="col-lg-4 col-sm-6 col-12">
                    <div class="card text-white bg-dark mt-3">
                        <div class="card-body">
                            <h2 class="main__subtitulo card-tittle">${apipelicula.title}</h2>
                            <div class="main__parrafo">
                                <p class="card-text">${apipelicula.overview}</p>
                            </div>
                            <br>
                            <img src="https://image.tmdb.org/t/p/w500/${apipelicula.poster_path}" class="card-img" alt="pelicula">

                            <div>
                                <br>
                                    <h2><strong>$${apipelicula.vote_count}</strong></h2>
                                <br>
                                    <button type="button" class="btn btn-outline-success" id="boton${apipelicula.id}"><a target>COMPRAR</a></button>
                                    <a href="${apipelicula.title}" class="btn btn-outline-warning" target="_blank">VER TRAILER</a>
                            </div>
                        </div>
            </div>`;

            });
        })

    apipeliculas.forEach(laPelicula => {

        console.log(lpeliculas.results);
        document.getElementById(`boton${apipelicula.title}`).addEventListener("click", function () {
            agregarPelicula(laPelicula)
        });
    })
}
let carrito = [];
function agregarPelicula(laPelicula) {
    carrito.push(laPelicula);
    Swal.fire('agregaste <strong>' + laPelicula.nombre + "</strong> a tu compra");


    document.getElementById("tablaCompras").innerHTML += `
        <td>${laPelicula.id}</td>
        <td>${laPelicula.nombre}</td>
        <td>${laPelicula.precio}$</td>
    `;
}