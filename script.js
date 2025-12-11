"use strict";

const peso = document.getElementById("peso");
const altura = document.getElementById("altura");
const botaoCalcular = document.getElementById("main__btnCalcular");
const resultado = document.getElementById("resultado");
const resultado2 = document.getElementById("resultado2");

function conversaoValor(valor){
    return parseFloat(valor.value);
}

function validaIMC(peso,altura){
    if(Number.isNaN(peso) || Number.isNaN(altura) || peso <= 0 || altura <= 0)
    {
        return false;
    }else{
        return true;
    }
}

function calculaIMC(peso, altura){
    return (peso/(altura * altura)).toFixed(2);
}

function classificacaoIMC(imc){

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

function mostrarResultado(imc,classificacao){
    resultado.textContent = imc;
    resultado2.textContent = classificacao;
}

function calculadora(peso, altura){

    const pesoConvertido = conversaoValor(peso);
    const alturaConvertida = conversaoValor(altura);
    const validou = validaIMC(pesoConvertido, alturaConvertida);

    console.log(validou);
    if(validou){
        const imc = calculaIMC(pesoConvertido,alturaConvertida);
        const classificacao = classificacaoIMC(imc);

        mostrarResultado(imc, classificacao);
    }
    else{
        if(pesoConvertido <= 0 || alturaConvertida <= 0){

            resultado.textContent = "Os valores não devem ser iguais ou menores que zero";
            resultado2.textContent = "";
        }else{

            resultado.textContent = "Os valores devem ser preenchidos";
            resultado2.textContent = "";
        }
    } 
}

botaoCalcular.addEventListener("click", () => {
    calculadora(peso,altura)
});







