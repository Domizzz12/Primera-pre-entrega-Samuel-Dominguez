function sumar(a, b){
    return a + b;
}

function restar(a, b){
    return a - b;
}

function multiplicar(a, b){
    return a * b;
}

function dividir(a, b){
    return a / b;
}

let num1 =Number(prompt("Ingresa tu primer número"))
    if(isNaN(num1)){
        Number(prompt("ingrese un valor numerico"))
    }


let num2 =Number(prompt("Ingresa tu segundo número"))
    if(isNaN(num2)){
        Number(prompt("ingrese un valor numerico"))
        
    }


let operacion = prompt("Elige la opetacion q quieres hacer (+,-,*/)")

if(operacion == "+"){
    resultado  = num1 + num2
    alert("el resultado es "+ resultado)

}else if(operacion == "-"){
    resultado  = num1 - num2
    alert("el resultado es "+ resultado)

}else if(operacion == "x"){
    resultado  = num1 * num2
    alert("el resultado es "+ resultado)
}else if(operacion == "/"){
    resultado  = num1 / num2
    alert("el resultado es "+ resultado)
}






  