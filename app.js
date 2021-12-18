let lado1 = document.getElementById("lado1");
let lado2 = document.getElementById("lado2");
let container = document.querySelector(".resultado");
let button1= document.querySelector(".buttons__input--button1");
let button2 = document.querySelector(".buttons__input--button2");
let button3 = document.querySelector(".buttons__input--button3");

const perimetro = (...argumento)=>
    argumento.reduce((acc,item)=>{
        const per = (acc*2)+(item*2);
        return per
    })
const area = (...argumento)=>
    argumento.reduce((acc,item)=>{
        const a = acc*item;
        return a
    })



    const showP = ()=>{
        const resultado = perimetro(parseInt(lado1.value),parseInt(lado2.value))
    
        let item = document.createElement("h1");
        item.classList.add("respuesta");
        let textItem = document.createTextNode(`El perimetro del rectangulo es: ${resultado}.`)
        item.appendChild(textItem);
        container.appendChild(item);
    }
    const showA= ()=>{
        const resultado = area(parseInt(lado1.value),parseInt(lado2.value))
    
        let item = document.createElement("h1");
        item.classList.add("respuesta");
        let textItem = document.createTextNode(`El área del rectangulo es: ${resultado}.`)
        item.appendChild(textItem);
        container.appendChild(item);
    }

    const refresh = ()=>{
        const titulo = document.querySelector(".respuesta");
        container.removeChild(titulo);
    }

button1.addEventListener("click", showP);
button2.addEventListener("click", showA);
button3.addEventListener("click", refresh);
