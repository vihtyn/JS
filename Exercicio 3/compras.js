document.getElementById('calcular').addEventListener('submit', 
function(event){
event.preventDefault();
const valorCompra = parseFloat(document.getElementById('valorCompra').value);

const juros = parseFloat(document.getElementById('juros').value);

const parcelas = parseFloat(document.getElementById('parcelas').value);

valorFinal = valorCompra + (valorCompra * (juros/100) * parcelas);

valorParcelas = valorFinal / parcelas;

document.getElementById('valorFinal').textContent = valorFinal;

document.getElementById('valorParcelas').textContent = valorParcelas;
});
