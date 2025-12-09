"use strict";

const peso = document.getElementById("peso");
const altura = document.getElementById("altura");
const botaoCalcular = document.getElementById("main__btnCalcular");
const resultado = document.getElementById("resultado");
const resultado2 = document.getElementById("resultado2");

function calculaIMC(peso, altura){

    const pesoConvertido = parseFloat(peso.value);
    const alturaConvertida = parseFloat(altura.value);
    
    if(Number.isNaN(pesoConvertido) || Number.isNaN(alturaConvertida)){
        return "Os valores devem ser preenchidos";
    }else{
        return (pesoConvertido/(alturaConvertida * alturaConvertida)).toFixed(2);
    }
}

function classificacaoIMC(imc){
    if(typeof imc == "string")
    {
        return "";
    }else{
        if(imc < 18.5){
            return "Magreza";
        }else if(imc < 24.9){
            return "Normal";
        }else if(imc < 29.9){
            return "SobrePeso";
        }else if(imc < 39.9){
            return "Obesidade";
        }else{
            return "Obesidade Grave";
        }
    }
}

botaoCalcular.addEventListener("click", 
  function(){
    const imc = calculaIMC(peso,altura);
    const classificacao = classificacaoIMC(imc);

    resultado.textContent = imc;
    resultado2.textContent = classificacao;
  });







