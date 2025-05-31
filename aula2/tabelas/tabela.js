function parsePrice(priceStr) {
        // Remove "R$" e converte para número float
        return parseFloat(priceStr.replace("R$", "").replace(",", "."));
    }

function formatPrice(value) {
    // Formata para o padrão brasileiro
    return "R$" + value.toFixed(2).replace(".", ",");
}

function calcularTotal() {
    const tabela = document.querySelector("table tbody");
    const linhas = tabela.querySelectorAll("tr");
    let total = 0;

    linhas.forEach(linha => {
        const precoCelula = linha.children[2];
        const preco = parsePrice(precoCelula.textContent);
        total += preco;
    });

    // Cria nova linha para o valor total
    const novaLinha = document.createElement("tr");

    const celulaNome = document.createElement("td");
    celulaNome.textContent = "Valor Total";
    celulaNome.colSpan = 2; // Ocupa duas colunas

    const celulaTotal = document.createElement("td");
    celulaTotal.textContent = formatPrice(total);

    novaLinha.appendChild(celulaNome);
    novaLinha.appendChild(celulaTotal);

    tabela.appendChild(novaLinha);
}

    // Executa assim que a página carrega
window.onload = calcularTotal;
 