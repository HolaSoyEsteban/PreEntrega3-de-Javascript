/* -------------------- Funciones ---------------------- */

function agregandoProductosAlCarritoProvisorio(chequeoExistencia,arrayEntrada,cant){
    if(chequeoExistencia === false){
        CarritoProvisorio.push({nombre:`${arrayEntrada.nombre}`, precio: arrayEntrada.precio, cantidad: cant});
    }else{
        for(objetos of CarritoProvisorio){
            if(objetos.nombre === arrayEntrada.nombre){
                objetos.cantidad = cant;
            }
        }
    }
}
    
function AgregarSherlock(){
    const botonAgregarSherlock = document.getElementById("botonSherlock");
    botonAgregarSherlock.onclick = () => {
        cantidadSherlock++;
        agregandoProductosAlCarritoProvisorio(chequeoSherlock,Libros[0],cantidadSherlock);
        chequeoSherlock = true;
        AlmacenandoEnStorageMedianteJSON();
        RecuperandoYMostrandoDelStorage();
    }
}

function AgregarPotter(){
    const botonAgregarPotter = document.getElementById("botonPotter");
    botonAgregarPotter.onclick = () => {
        cantidadPotter++;
        agregandoProductosAlCarritoProvisorio(chequeoPotter,Libros[1],cantidadPotter);
        chequeoPotter = true;
        AlmacenandoEnStorageMedianteJSON();
        RecuperandoYMostrandoDelStorage();
    }
}
    
function AgregarVerne(){
    const botonAgregarVerne = document.getElementById("botonVerne");
    botonAgregarVerne.onclick = () => {
        cantidadVerne++;
        agregandoProductosAlCarritoProvisorio(chequeoVerne,Libros[2],cantidadVerne);
        chequeoVerne = true;
        AlmacenandoEnStorageMedianteJSON();
        RecuperandoYMostrandoDelStorage();
    }
}
    
function AgregarKing(){
    const botonAgregarKing = document.getElementById("botonKing");
    botonAgregarKing.onclick = () => {
        cantidadKing++;
        agregandoProductosAlCarritoProvisorio(chequeoKing,Libros[3],cantidadKing);
        chequeoKing = true;
        AlmacenandoEnStorageMedianteJSON();
        RecuperandoYMostrandoDelStorage();
    }
}
    
function AgregarRunner(){
    const botonAgregarRunner = document.getElementById("botonRunner");
    botonAgregarRunner.onclick = () => {
        cantidadRunner++;
        agregandoProductosAlCarritoProvisorio(chequeoRunner,Libros[4],cantidadRunner);
        chequeoRunner = true;
        AlmacenandoEnStorageMedianteJSON();
        RecuperandoYMostrandoDelStorage(chequeoRunner);
    }
}
// Funcion para almacenar la información del objeto Carrito Provisorio

function AlmacenandoEnStorageMedianteJSON(){
    const carritoProvisorioEnJSON = JSON.stringify(CarritoProvisorio);
    localStorage.setItem("Carrito",carritoProvisorioEnJSON);
}

function RecuperandoYMostrandoDelStorage(chequeo){
    const objetosAlmacenados = JSON.parse(localStorage.getItem("Carrito"));
    const CarritoDefinitivo = [];
    for(objetoDelJSON of objetosAlmacenados){
        CarritoDefinitivo.push(new SagaCarrito(objetoDelJSON));
    }
    console.log(CarritoDefinitivo);
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

