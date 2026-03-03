document.getElementById('numeroForm').addEventListener('submit',
function(event) {
event.preventDefault(); 
const numero = parseFloat(document.getElementById('numero').value);

const operacao = document.getElementById('operacao').value;

let resultadoFinal;

if(operacao == "quadrado"){
    resultadoFinal = calcularQuadrado(numero);
}else{
    resultadoFinal = calcularCubo(numero);
}

document.getElementById('resultadoFinal').textContent = resultadoFinal;
});
function calcularQuadrado(numero) {
return numero * numero;
}
function calcularCubo(numero){
return numero * numero * numero;
}