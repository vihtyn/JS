let vendas = []; 

function adicionarVenda() {
    const inputNome = document.getElementById('nomeVendedor');
    const inputValor = document.getElementById('valorCompra');

    const nome = inputNome.value.trim();
    const valorOriginal = parseFloat(inputValor.value);

    // DATA AUTOMÁTICA
    // Pega a data atual, corta os milissegundos e arruma o formato
    const dataFormatada = new Date().toLocaleString('pt-BR').slice(0, 16);

    if (nome !== "" && !isNaN(valorOriginal)) {
        const desconto = valorOriginal * 0.10;
        
        const novaVenda = {
            vendedor: nome,
            bruto: valorOriginal,
            desconto: desconto,
            totalFinal: valorOriginal - desconto,
            data: dataFormatada
        };

        vendas.push(novaVenda);
        
        // Limpa campos
        inputNome.value = "";
        inputValor.value = "";
        inputNome.focus();
        
        atualizarLista(); 
    } else {
        alert("Preencha os campos corretamente!");
    }
}

function atualizarLista() {
    const listaDiv = document.getElementById('listaValores');
    const template = document.getElementById('modelo-venda');
    
    listaDiv.innerHTML = ''; 
    
    vendas.forEach((item, indice) => {
        const clone = template.content.cloneNode(true);

        // --- AQUI VOLTA O ID ---
        clone.querySelector('.id-venda').textContent = `ID #${indice + 1} - `;

        // Preenche o restante dos dados
        clone.querySelector('.nome-txt').textContent = item.vendedor;
        clone.querySelector('.data-txt').textContent = `(${item.data})`;
        clone.querySelector('.bruto-txt').textContent = `Bruto: R$ ${item.bruto.toFixed(2)}`;
        clone.querySelector('.desc-txt').textContent = `Desconto (10%): R$ ${item.desconto.toFixed(2)}`;
        clone.querySelector('.final-txt').textContent = `Total: R$ ${item.totalFinal.toFixed(2)}`;

        // Configura o botão de excluir que está no HTML
        const btnExcluir = clone.querySelector('.btn-excluir');
        btnExcluir.onclick = () => {
            removerVenda(indice);
        };

        listaDiv.appendChild(clone);
    });
    
    document.getElementById('info').innerHTML = `Total de vendas: ${vendas.length}`;
}

// Não esqueça da função de remover
function removerVenda(indice) {
    vendas.splice(indice, 1);
    atualizarLista();
}