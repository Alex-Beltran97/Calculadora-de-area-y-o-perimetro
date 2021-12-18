let lado1 = document.getElementById("lado1");
let lado2 = document.getElementById("lado2");
let container = document.querySelector(".resultado");
let button1= document.querySelector(".buttons__input--button1");
let button2 = document.querySelector(".buttons__input--button2");
let button3 = document.querySelector(".buttons__input--button3");

let click1 = false;
let click2 = false;

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

        if (click1){
            return 0;
        }else{
            const resultado = perimetro(parseInt(lado1.value),parseInt(lado2.value))
        
            let item = document.createElement("h1");
            item.classList.add("respuesta");
            let textItem = document.createTextNode(`El perimetro del rectangulo es: ${resultado}.`)
            item.appendChild(textItem);
            container.appendChild(item);
    
            click1 = !click1;
        }
    }
    

    
    const showA= ()=>{
        if (click2){
            return 0;
        }else{
            const resultado = area(parseInt(lado1.value),parseInt(lado2.value))
        
            let item = document.createElement("h1");
            item.classList.add("respuesta");
            let textItem = document.createTextNode(`El área del rectangulo es: ${resultado}.`)
            item.appendChild(textItem);
            container.appendChild(item);
            click2 = !click2;
        }
    }

    const refresh = ()=>{
        const titulo = document.querySelector(".respuesta");
        lado1.value = 0;
        lado2.value = 0;
        container.removeChild(titulo);
        click1 = false;
        click2 = false;
    }
    
    button1.addEventListener("click", showP);
button2.addEventListener("click", showA);
button3.addEventListener("click", refresh);
