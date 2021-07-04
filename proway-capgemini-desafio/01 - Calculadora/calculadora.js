// Crie um script em sua linguagem de programação preferida que receba o valor investido em reais e
// retorne uma projeção aproximada da quantidade máxima de pessoas
// que visualizarão o mesmo anúncio (considerando o anúncio original + os compartilhamentos)
var resultado = calculadora(50);

function calculadora(valorInformado) {
  // valor no formato de moeda BR
  var valorFormatado = valorInformado.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  // RN4 - 30 pessoas visualizam o anúncio original (não compartilhado) a cada R$ 1,00 investido.
  var numeroPessoasVisualizam = parseInt(valorInformado) * 30;

  // RN1 - a cada 100 pessoas que visualizam o anúncio 12 clicam nele.
  var numeroPessoasClicam = parseInt(numeroPessoasVisualizam / 100) * 12;

  // RN2 - a cada 20 pessoas que clicam no anúncio 3 compartilham nas redes sociais.
  var numeroPessoasCompartilham = parseInt(numeroPessoasClicam / 20) * 3;

  // RN5 - o mesmo anúncio é compartilhado no máximo 4 vezes em sequência
  if (numeroPessoasCompartilham > 4) {
    numeroPessoasCompartilham = 4;
  }

  // RN3 - cada compartilhamento nas redes sociais gera 40 novas visualizações.
  var numeroNovasVisualizacoes = numeroPessoasCompartilham * 40;

  return {
    valorFormatado,
    numeroPessoasVisualizam,
    numeroPessoasClicam,
    numeroPessoasCompartilham,
    numeroNovasVisualizacoes,
  };
}

console.log("Valor informado:", resultado.valorFormatado);
console.log(
  "Estimativa de pessoas que visualizam o anúncio original (não compartilhado):",
  resultado.numeroPessoasVisualizam
);
console.log(
  "Estimativa de pessoas que clicam no anúncio:",
  resultado.numeroPessoasClicam
);
console.log(
  "Estimativa de pessoas que compartilham nas redes sociais:",
  resultado.numeroPessoasCompartilham
);
console.log(
  "Estimativa de novas visualizações:",
  resultado.numeroNovasVisualizacoes
);
console.log(
  "Projeção aproximada da quantidade máxima de pessoas que visualizarão o mesmo anúncio (original + compartilhamentos):",
  resultado.numeroPessoasVisualizam + resultado.numeroNovasVisualizacoes
);

console.log("--------------------------------\n");

console.assert(
  calculadora(7.5).valorFormatado ===
    (7.5).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    }),
  "Valor informado não foi formatado corretamente"
);

// RN4 - 30 pessoas visualizam o anúncio original (não compartilhado) a cada R$ 1,00 investido.
console.assert(
  calculadora(7.1).numeroPessoasVisualizam === parseInt(7.9) * 30,
  "Número de pessoas que visualizam incorreto"
);

// RN1 - a cada 100 pessoas que visualizam o anúncio 12 clicam nele.
console.assert(
  calculadora(8.1).numeroPessoasClicam ===
    parseInt((parseInt(8.9) * 30) / 100) * 12,
  "Número de pessoas que clicam incorreto"
);

// RN2 - a cada 20 pessoas que clicam no anúncio 3 compartilham nas redes sociais.
// RN5 - o mesmo anúncio é compartilhado no máximo 4 vezes em sequência
console.assert(
  calculadora(50.1).numeroPessoasCompartilham === 4,
  "Número de pessoas que compartilham incorreto"
);

// RN3 - cada compartilhamento nas redes sociais gera 40 novas visualizações.
console.assert(
  calculadora(10.9).numeroNovasVisualizacoes ===
    parseInt((parseInt((parseInt(10.9) * 30) / 100) * 12) / 20) * 3 * 40,
  "Número de novas visualizações incorreto"
);

// quantidade máxima de pessoas que visualizarão o mesmo anúncio (considerando o anúncio original + os compartilhamentos)
console.assert(
  calculadora(10.1).numeroPessoasVisualizam +
    calculadora(10.1).numeroNovasVisualizacoes ===
    parseInt(10.1) * 30 +
      parseInt((parseInt((parseInt(10.1) * 30) / 100) * 12) / 20) * 3 * 40,
  "Quantidade máxima de pessoas que visualizarão incorreta"
);
