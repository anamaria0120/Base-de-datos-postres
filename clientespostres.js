const nombre=document.getElementById("nombre");
const direccion=document.getElementById("direccion");
const telefono =document.getElementById("telefono");
const enviar =document.getElementById("enviar");
const form=document.getElementById("form");
const listadeclientes = JSON.parse(localStorage.getItem("clientes")||"[]");
const listadelhtml = document.getElementById("lista")

form.addEventListener("submit",guardar);
function guardar(event){
    event.preventDefault();
    const nuevocliente={
        nombre:nombre.value,
        telefono:telefono.value,
        direccion:direccion.value,
    }
    console.log(nuevocliente);
    listadeclientes.push(nuevocliente);
    console.log(listadeclientes);
    localStorage.setItem("clientes",JSON.stringify(listadeclientes));
    pintar(listadeclientes);
}

function pintar(lista){
    let htmldelcliente = "";
    for(let i=0; i<lista.length; i=i+1){
        htmldelcliente = htmldelcliente + `<tr><td>${lista[i].nombre}</td><td>${lista[i].direccion}</td><td>${lista[i].telefono}</td><td><button onclick='borrar(${i})'>X</button></td></tr>`
    }
    listadelhtml.innerHTML = htmldelcliente;
    console.log(lista)
}
pintar(listadeclientes);

function borrar(i){
    console.log(i);
    listadeclientes.splice( i, 1 );
    pintar(listadeclientes);
    localStorage.setItem("clientes",JSON.stringify(listadeclientes));
}

moment().add(10, 'days').calendar(); 