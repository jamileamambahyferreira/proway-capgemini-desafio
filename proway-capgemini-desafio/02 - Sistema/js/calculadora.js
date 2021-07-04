function calculadora(event) {
    event.preventDefault();

    let valorInformado = document.getElementById("investimento").value;

    // transformando no formato de moeda BR
    let valorFormatado = valorInformado.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });

    // Regra- 30 pessoas visualizam o anúncio original (não compartilhado) a cada R$ 1,00 investido.
    let numeroPessoasVisualizam = parseInt(valorInformado) * 30;

    // Regra - a cada 100 pessoas que visualizam o anúncio 12 clicam nele.
    let numeroPessoasClicam = parseInt(numeroPessoasVisualizam / 100) * 12;

    //Regra- a cada 20 pessoas que clicam no anúncio 3 compartilham nas redes sociais.
    let numeroPessoasCompartilham = parseInt(numeroPessoasClicam / 20) * 3;

    //Regra - o mesmo anúncio é compartilhado no máximo 4 vezes em sequência
    if (numeroPessoasCompartilham > 4) {
        numeroPessoasCompartilham = 4;
    }

    //Regra - cada compartilhamento nas redes sociais gera 40 novas visualizações.
    let numeroNovasVisualizacoes = numeroPessoasCompartilham * 40;

    let dataInicial = document.getElementById("data-inicio").value;
    let dataFinal = document.getElementById("data-fim").value;
    let totalDias = calcularData(dataInicial, dataFinal);

   
    if(totalDias === 0){
        totalDias = 1
    }


    if (valorInformado === "") {
        alert("Digite o valor do Investimento");
    } else if (dataInicial === "") {
        alert("Digite a data de início do anúncio");
    } else if (dataFinal === "") {
        alert("Digite a data de término do anúncio");
    } else {
        document.getElementById("relatorio").innerHTML += `
      <h4>Relatório:</h4>
      <ul class="relatorio">
        <li><strong>Total Investido:</strong> ${
            (totalDias * valorFormatado).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
            })
        }</li>
        <li><strong>Total de Visualizações:</strong> ${
            numeroPessoasVisualizam * totalDias
        }</li>
        <li><strong>Total de Cliques:</strong> ${
            numeroPessoasClicam * totalDias
        }</li>
        <li><strong>Total de Compartilhamentos:</strong> ${
            numeroPessoasCompartilham * totalDias
        }</li>
      </ul>
      `;
    }
}

function calcularData(dataInicial, dataFinal) {
   
    let date1 = new Date(dataInicial);
    let date2 = new Date(dataFinal);

   
    let timeDiff = Math.abs(date2.getTime() - date1.getTime());

   
    let totalDias = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return totalDias;
    0;
}
