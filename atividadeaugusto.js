// 1) Acesso Simples
const notas = [8, 7, 9, 6];
console.log(`A nota do terceiro aluno é: ${notas[2]}`);
// Exemplo adicional:
const outraNota = 5; // Suponha outra nota
console.log(`Exemplo: Se a nota do terceiro aluno fosse ${outraNota}, seria exibida essa nota.`);

// 2) Acesso a Elemento Específico
const produtos = ["Camiseta", "Calça", "Tênis", "Mochila"];
console.log(`O último produto da lista é: ${produtos[produtos.length - 1]}`);
// Exemplo adicional:
const outroProduto = "Boné";
console.log(`Exemplo: Se o último produto fosse "${outroProduto}", ele seria exibido.`);

// 3) Atribuição de Desconto
let precos = [100, 200, 300];
precos = precos.map(preco => preco * 0.9);
console.log("Preços com desconto de 10%:", precos);
// Exemplo adicional:
const precoExemplo = 150;
console.log(`Exemplo: Se o preço original fosse R$${precoExemplo}, com desconto seria R$${precoExemplo * 0.9}.`);

// 4) Atribuição com Base em Condição
let pontuacoes = [80, 120, 95, 130];
pontuacoes = pontuacoes.map(pontuacao => pontuacao < 100 ? pontuacao + 10 : pontuacao);
console.log("Pontuações ajustadas:", pontuacoes);
// Exemplo adicional:
const pontuacaoExemplo = 85;
console.log(`Exemplo: Se a pontuação fosse ${pontuacaoExemplo}, ela seria ajustada para ${pontuacaoExemplo + 10}.`);

// 5) Percorrendo array com for
const tarefas = ["Lavar louça", "Limpar casa", "Fazer compras"];
console.log("Suas tarefas são:");
for (let tarefa of tarefas) {
  console.log(`- ${tarefa}`);
}
// Exemplo adicional:
console.log(`Exemplo: Se houvesse uma tarefa adicional, como "Cozinhar", ela seria listada.`);

// 6) Percorrendo e Somando
const gastos = [500, 200, 300, 150];
const totalGastos = gastos.reduce((total, gasto) => total + gasto, 0);
console.log(`O total de gastos é: R$${totalGastos}`);
// Exemplo adicional:
const novosGastos = [600, 400];
const novoTotal = novosGastos.reduce((total, gasto) => total + gasto, 0);
console.log(`Exemplo: Para os gastos ${novosGastos}, o total seria R$${novoTotal}.`);

// 7) Contando Valores
const despesas = [25, 35, 15, 40, 50];
const diasAcima30 = despesas.filter(despesa => despesa > 30).length;
console.log(`Quantidade de dias com gastos acima de R$30: ${diasAcima30}`);
// Exemplo adicional:
const exemploDespesas = [20, 10, 50];
const diasExemplo = exemploDespesas.filter(despesa => despesa > 30).length;
console.log(`Exemplo: Para as despesas ${exemploDespesas}, ${diasExemplo} dias tiveram gastos acima de R$30.`);

// 8) Atualização de Valores
let estoque = [10, 20, 30, 40];
estoque[2] = 25;
console.log("Estoque atualizado:", estoque);
// Exemplo adicional:
console.log("Exemplo: Se o valor do terceiro item fosse atualizado para 15, o estoque seria:", [10, 20, 15, 40]);

// 9) Atualização com Base em Venda
let estoqueVenda = [50, 100, 75];
const venda = 20;
estoqueVenda[1] -= venda;
console.log("Estoque após a venda:", estoqueVenda);
// Exemplo adicional:
console.log("Exemplo: Se a venda fosse 10 unidades, o estoque seria:", [50, 90, 75]);

// 10) Atualização Condicional de Elementos
let temperaturas = [28, 32, 25, 35];
console.log("Temperaturas originais:", temperaturas);
temperaturas = temperaturas.map(temp => {
  const classificacao = temp > 30 ? "Quente" : "Agradável";
  console.log(`Temperatura: ${temp} -> Classificação: ${classificacao}`);
  return classificacao;
});
console.log("Temperaturas classificadas:", temperaturas);
// Exemplo adicional:
const temperaturaExemplo = 16;
const classificacaoExemplo = temperaturaExemplo > 30 ? "Quente" : "Agradável";
console.log(`Exemplo: Para uma temperatura de ${temperaturaExemplo}, a classificação seria '${classificacaoExemplo}'.`);