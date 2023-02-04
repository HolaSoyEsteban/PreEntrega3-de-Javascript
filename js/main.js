/* -------------------- Funciones ---------------------- */

function agregandoProductosAlCarritoProvisional(chequeoExistencia,arrayEntrada,cant){
    
    if(chequeoExistencia === false){
        CarritoProvisorio.push({nombre:`${arrayEntrada.nombre}`, precio: arrayEntrada.precio, cantidad: cant});
    }else{
        for(objetos of CarritoProvisorio){
                if(objetos.nombre === arrayEntrada.nombre){
                    objetos.cantidad = cant;
                }
            }
        }
        console.log(chequeoSherlock);
    }

    function AgregarSherlock(){
        const botonAgregarSherlock = document.getElementById("botonSherlock");
        botonAgregarSherlock.onclick = () => {
        cantidadSherlock++;
        agregandoProductosAlCarritoProvisional(chequeoSherlock,Libros[0],cantidadSherlock);
        chequeoSherlock = true;
        console.log(CarritoProvisorio);
        }
    }

    function AgregarPotter(){
        const botonAgregarPotter = document.getElementById("botonPotter");
        botonAgregarPotter.onclick = () => {
            cantidadPotter++;
            agregandoProductosAlCarritoProvisional(chequeoPotter,Libros[1],cantidadPotter);
            chequeoPotter = true;
            console.log(CarritoProvisorio);
        }
    }
    
    function AgregarVerne(){
        const botonAgregarVerne = document.getElementById("botonVerne");
        botonAgregarVerne.onclick = () => {
            cantidadVerne++;
            agregandoProductosAlCarritoProvisional(chequeoVerne,Libros[2],cantidadVerne);
            chequeoVerne = true;
            console.log(CarritoProvisorio);
        }
    }
    
    function AgregarKing(){
        const botonAgregarKing = document.getElementById("botonKing");
        botonAgregarKing.onclick = () => {
            cantidadKing++;
            agregandoProductosAlCarritoProvisional(chequeoKing,Libros[3],cantidadKing);
            chequeoKing = true;
            console.log(CarritoProvisorio);
        }
    }
    
    function AgregarRunner(){
        const botonAgregarRunner = document.getElementById("botonRunner");
        botonAgregarRunner.onclick = () => {
            cantidadRunner++;
            agregandoProductosAlCarritoProvisional(chequeoRunner,Libros[4],cantidadRunner);
            chequeoRunner = true;
            console.log(CarritoProvisorio);
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

//Variables booleanas

let chequeoSherlock = false;
let chequeoPotter = false;
let chequeoVerne = false;
let chequeoKing = false;
let chequeoRunner = false;

//---------------------------------------------------------------------------------------

//-------------------------------- Comienza el programa ---------------------------------

// Agregando titulos y precios de las sagas al DOM
for(let i=0; i<ArrayIdSagas.length; i++){
    const tituloLibro = document.getElementById(ArrayIdSagas[i]);
    tituloLibro.innerHTML= `<p>${Libros[i].nombre}</p><div class="precios"><p>$${Libros[i].precio}</p></div>`;
}
//------------------------------------------------

// Eventos

AgregarSherlock();
AgregarPotter();
AgregarVerne();
AgregarKing();
AgregarRunner();

