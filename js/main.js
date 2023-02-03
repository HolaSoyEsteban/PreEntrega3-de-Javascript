/* -------------------- Funciones ---------------------- */

function agregandoProductosAlCarritoProvisional(arrayEntrada,cant){
    if(CarritoProvisorio.length === 0){
        CarritoProvisorio.push({nombre:`${arrayEntrada.nombre}`, precio: arrayEntrada.precio, cantidad: cant});
    }else{
        for(objetos of CarritoProvisorio){
            for(recorriendoSaga of Libros){
                if(objetos.nombre === recorriendoSaga.nombre){
                    objetos.cantidad = cant;
                }else{
                    CarritoProvisorio.push({nombre:`${arrayEntrada.nombre}`, precio: arrayEntrada.precio, cantidad: cant});
                }
            }
        
        }
    }
}
//---------------------------------------------------------------------------------------

//  ---- Objetos y Arrays de Objetos ----------------------------------------------------

class Saga {
    constructor(nombre, precio, stock){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
    DescontarDelStock(cantidadADescontar){
        this.stock = this.stock - cantidadADescontar;
    }
}

class SagaCarrito {
    constructor(nombre, precio, cantidad){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}

const Libros = [
    new Saga("Saga de Sherlock Holmes", 35000, 10),
    new Saga("Saga de Harry Potter", 27000, 10),
    new Saga("Saga de Julio Verne", 45000, 10),
    new Saga("Saga de Stephen King", 25000, 10),
    new Saga("Saga de Maze Runner", 15000, 10)
]

const CarritoProvisorio = [];
//---------------------------------------------------------------------------------------

// ---- Arrays --------------------------------------------------------------------------

const ArrayIdSagas = ["SagaSherlock","SagaPotter","SagaVerne","SagaKing","SagaRunner"];
//---------------------------------------------------------------------------------------

// ---- Variables -----------------------------------------------------------------------

let boton = 0;
let cantidadSherlock = 0;
let cantidadPotter = 0;
let cantidadVerne = 0;
let cantidadKing = 0;
let cantidadRunner = 0;
//---------------------------------------------------------------------------------------

//-------------------------------- Comienza el programa ---------------------------------

// Agregando titulos y precios de las sagas al DOM
for(let i=0; i<ArrayIdSagas.length; i++){
    const tituloLibro = document.getElementById(ArrayIdSagas[i]);
    tituloLibro.innerHTML= `<p>${Libros[i].nombre}</p><div class="precios"><p>$${Libros[i].precio}</p></div>`;
}
//------------------------------------------------

// Eventos

const botonAgregarSherlock = document.getElementById("botonSherlock");
botonAgregarSherlock.onclick = () => {
    cantidadSherlock++;
    agregandoProductosAlCarritoProvisional(Libros[0],cantidadSherlock);

    console.log(CarritoProvisorio);
}
const botonAgregarPotter = document.getElementById("botonPotter");
botonAgregarPotter.onclick = () => {
    cantidadPotter++;
    agregandoProductosAlCarritoProvisional(Libros[1],cantidadPotter);

    console.log(CarritoProvisorio);
}
