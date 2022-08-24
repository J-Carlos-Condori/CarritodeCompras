let peliculas=[
    {
        id:1,
        precio:100,
        generos:["superheroes","violencia","accion","serie"],
        nombre:"WATCHMEN",
        descripcion:"El equipo creativo de Batman: la serie animada, ganadora en los Emmy, describe las aventuras de Superman, legendario superhéroe, contra las fuerzas del mal y su lucha constante por la verdad, la justicia y el estilo de vida americano .",
        portada:"./portadas/img1-Watchmen.jpg",
        enlace:"https://www.youtube.com/watch?v=ejjFCjFJBXM",

    },
    {
        id:2,
        precio:200,
        generos:["serie","catastrofes","hechos reales"],
        nombre:"CHERNOBYL",
        descripcion:"El equipo creativo de Batman: la serie animada, ganadora en los Emmy, describe las aventuras de Superman, legendario superhéroe, contra las fuerzas del mal y su lucha constante por la verdad, la justicia y el estilo de vida americano .",
        portada:"./portadas/img2-Chernobyl.jpg",
        enlace:"https://www.youtube.com/watch?v=s9APLXM9Ei8&t=31s",
    },
    {
        id:3,
        precio:150,
        generos:["animacion","superheroes","misterio"],
        nombre:"BATMAN",
        descripcion:"El equipo : la serie animada, ganadora en los Emmy, describe las aventuras de Superman, legendario superhéroe, contra las fuerzas del mal y su lucha constante por la verdad, la justicia y el estilo de vida americano .",
        portada:"./portadas/img3-Batman.jpg",
        enlace:"https://www.youtube.com/watch?v=rrmUk2YUm14",
    },
    {
        id:4,
        precio:190,
        generos:["ciencia ficcion","drama","serie","accion"],
        nombre:"WESTWORLD",
        descripcion:"El equipo creativo de Batman: la serie animada, ganadora en los Emmy, describe las aventuras de Superman, legendario superhéroe, contra las fuerzas del mal y su lucha constante por la verdad, la justicia y el estilo de vida americano .",
        portada:"./portadas/img4-Westworld.jpg",
        enlace:"https://www.youtube.com/watch?v=SV5lzrbNDx0",
    },
    {
        id:5,
        precio:220,
        generos:["animacion","superheroes","aventura"],
        nombre:"SUPERMAN",
        descripcion:"El equipo creativo de Batman: la serie animada, ganadora en los Emmy, describe las aventuras de Superman, legendario superhéroe, contra las fuerzas del mal y su lucha constante por la verdad, la justicia y el estilo de vida americano .",
        portada:"./portadas/img5-Superman.jpg",
        enlace:"https://www.youtube.com/watch?v=ZSPwGK-xLhk",
    },
]

function mostrar(){
    const contenedor = document.getElementById("listado");
        for(let laPelicula in peliculas){
            let arraygeneros=peliculas[laPelicula].generos.join(" - ");
            contenedor.innerHTML+=
            `<div class="col-lg-4 col-sm-6 col-12">
                    <div class="card mt-3">
                        <div class="card-body">
                            <h2 class="main__subtitulo card-tittle">${peliculas[laPelicula].nombre}</h2>
                            <div class="main__parrafo">
                                <p class="card-text">${peliculas[laPelicula].descripcion}</p>
                            </div>
                            <br>
                            <img src=${peliculas[laPelicula].portada} class="card-img" alt="pelicula">
                            
                            <div>
                                <br>
                                    <h2><strong>$${peliculas[laPelicula].precio}</strong></h2>
                                <br>
                                    <button type="button" class="btn btn-outline-success" id="boton${peliculas[laPelicula].id}"><a target>COMPRAR</a></button>
                                    <a href="${peliculas[laPelicula].enlace}" class="btn btn-outline-warning" target="_blank">VER TRAILER</a>
                            </div>
                            <div id="genero">
                                <br>
                                <h5><strong>${arraygeneros}<strong></h5>

                            </div>
                        </div>
            </div>`;
        }

        peliculas.forEach(laPelicula=>{
            document.getElementById("`boton${peliculas[laPelicula].id}`").addEventListener("click",function(){
                comprarPelicula(laPelicula);

                console.log(`boton${peliculas[laPelicula].id}`);
                console.log(`boton${laPelicula.id}`)

            });
        })

}



let carrito=[];
let lista = document.getElementById("tablaCompras");

function comprarPelicula(laPelicula){

    carrito.push(laPelicula);
    console.log("cargada");
}

mostrar();

// for(let j=0;j<peliculas[laPelicula].generos.length;j++){
            //     `<a>${(peliculas[laPelicula].generos[j])} sd</a>`
            //