"use strict";


const botaoCalcular = document.getElementById("main__btnCalcular");
const resultado = document.getElementById("resultado");


function calculaIMC(){
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    const imc = peso/(altura * altura);
    
    resultado.textContent = imc.toFixed(2);
}




botaoCalcular.addEventListener("click", 
    calculaIMC);




