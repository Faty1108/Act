//Cambiar de vista
let inputContador = document.getElementById("nombre");
let botonBuscador = document.getElementById("buscador");
let botonAcronimo = document.getElementById("acronimo");
let botonSubmit = document.getElementById("subir");


let textBuscador= botonBuscador.value;
let textAcronimo= botonAcronimo.value;


//Contador

botonSubmit.addEventListener('click',(e)=>{
    e.preventDefault();
    alert("Cadena enviada");
    let textContador = inputContador.value; 
    let resultados = document.getElementById("resultados");
    let sinEspacio = document.getElementById("sinEspacio");
    let contPal = document.getElementById("contarPalabras");
    let palLar = document.getElementById("palabrasLargas");

    let valor=0;

    for(let i=0; i<textContador.length; i++){
        if(textContador[i]!=" "){
            valor += textContador[i];
        }
    }

    let palBusca = textContador.split((" "),(textContador.length));


    //palabra mas larga
    let mayor="";
    for(let i=0; i<valor.length; i++){
        
        if(valor[i].length>mayor){
            mayor += valor[i];
        }

    resultados.innerHTML +=`${textContador.length}`;
    sinEspacio.innerHTML +=`${valor.length-1}`;
    contPal.innerHTML += `${valor.length-1}`;
    //palLar.innerHTML += `${}`;
    //if(botonContador=="none")

});

//Buscador
/*
botonSubmit.addEventListener("click", (e)=>{
    let inputPalabra = document.getElementById("buscador");
    let inputBuscar = document.getElementById("nombre");
    let resultados = document.getElementById("resultados");

    resultados.innerHTML = "";
    e.preventDefault();
    let coincidencias = "";
    let buscar = inputBuscar.value;
    let palabraBuscar = inputPalabra.value;
    let contCoincidencias = 1-1;
    buscar = buscar.split(" ");
    console.log(buscar);

    for(cont=0;cont<buscar.length ; cont++)
    {
        if(buscar[cont].toUpperCase().includes(palabraBuscar.toUpperCase()) == true)
        {
            coincidencias += buscar[cont];
            contCoincidencias++;       
        }    
    }
        resultados.innerHTML+= "Palabras con coincidencias: " + coincidencias;
        resultados.innerHTML+= "Cantidad de palabras con coincidencias: " + contCoincidencias;
    })
*/
//Acronimo
/*
botonSubmit.addEventListener('click', function(e){
    e.preventDefault();
    let resultados = document.getElementById("resultados");
    let inputAcronimo=document.getElementById("nombre");
    let palabras = inputAcronimo.value.split(" ");
    let acronimo = "";
    for(let i=0; i<palabras.length; i++)
    {
        acronimo += palabras[i].slice(0,1).toUpperCase();
    }
    resultados.innerHTML+= "Cantidad de palabras con coincidencias: " + acronimo;
});
*/